import React from "react";
import { GetServerSideProps } from "next";
import { internalGetRequest } from "../lib/api/internal-api";
import classes from "../components/layout/Layout.module.css";

//Rest-api which provides 10 Images on page 1.
type Props = {
   res : string
}

const RestApi: React.FC<Props> = (props) => {
  return (
    <div className={classes.rest}>
      <pre> {JSON.stringify(props.res, null, 2)}</pre>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  //fetch data from api
  const res = await internalGetRequest();

  return {
    props: { res },
  };
}

export default RestApi;
