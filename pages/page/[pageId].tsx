import React, { useEffect } from "react";
import { Media, PageInfo } from "../../interfaces";
import MediaList from "../../components/media/MediaList";
import { internalPostRequest } from "../../lib/api/internal-api";
import { PAGE_NOT_FOUND_404 } from "../../lib/properties/error-properties";
import { NUMBER_OF_PAGES } from "../../lib/properties/app-variables";
import classes from "../../components/layout/Layout.module.css";
import { useRouter } from "next/dist/client/router";
import { useMediaContext } from "../../store/media-context";

type Props = {
  pageInfo: PageInfo;
  media: Media[];
  error: string;
};

const Page = (props: Props) => {
  const router = useRouter();
  const ctx = useMediaContext();

  let loadedMedia: Media[];
  let loadedError: string;

  //to load only valid paths i.e, pageId
  if (+router.query.pageId > 0 && +router.query.pageId <= NUMBER_OF_PAGES) {
    //if the pageinfo is present in the context, use the cached content fron the context to build the page.
    const detailInStore =
      ctx?.pageArray.length > 0
        ? ctx.pageArray.find((e) =>
            e.pageInfo.currentPage === +router.query.pageId ? e : null
          )
        : null;

    loadedMedia = detailInStore?.media ?? null;

    useEffect(() => {
      //Call the API only if the page info isn't stores in the context
      if (!detailInStore) {
        internalPostRequest({ pageId: +router.query.pageId }).then((res) => {
          const page = {
            pageInfo: res?.data?.Page?.pageInfo,
            media: res?.data?.Page?.media,
          };
          loadedError = res?.error;

          //store the info in context
          ctx.dispatch({
            type: "ADD",
            page,
          });
          loadedMedia = page.media;
        });
      }
    }, [router.query.pageId]);
  } else {
    loadedError = PAGE_NOT_FOUND_404;
  }

  if (loadedError && !loadedMedia) {
    return <div className={classes.error}>{loadedError}</div>;
  }
  return <MediaList media={loadedMedia}></MediaList>;
};


export default Page;
