import React from "react";
import { GetServerSideProps } from "next";
import { Media, PageInfo } from "../../interfaces";
import MediaList from "../../components/media/MediaList";
import { internalPostRequest } from "../../lib/api/internal-api";
import { PAGE_NOT_FOUND_404 } from "../../lib/properties/error-properties";
import { NUMBER_OF_PAGES } from "../../lib/properties/app-variables";
import classes from "../../components/layout/Layout.module.css";

type Props = {
  pageInfo: PageInfo;
  media: Media[];
  error: string;
};

const Page = (props: Props) => {
  if (props.error) {
    return <div className={classes.error}>{props.error}</div>;
  }
  return (
    <>
      <MediaList media={props.media}></MediaList>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //fetch data from api
  if (+context.params.pageId > 0 && +context.params.pageId <= NUMBER_OF_PAGES) {
    const res = await internalPostRequest({ pageId: +context.params.pageId });

    return {
      props: {
        pageInfo: res?.data?.Page?.pageInfo ?? null,
        media: res?.data?.Page?.media ?? null,
        error: res?.error ?? null,
      },
    };
  } else {
    return {
      props: {
        pageInfo: null,
        media: null,
        error: PAGE_NOT_FOUND_404,
      },
    };
  }
};

export default Page;
