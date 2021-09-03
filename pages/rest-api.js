import React from "react";
import { internalGetRequest } from "../lib/api/internal-api";
import classes from "../components/layout/Layout.module.css";

//Rest-api which provides 10 Images on page 1.
const RestApi = (props) => {
  return (
    <div className={classes.rest}>
      <pre> {JSON.stringify(props.res, null, 2)}</pre>
    </div>
  );
};

export async function getServerSideProps() {
  //fetch data from api
  const res = await internalGetRequest();

  return {
    props: { res },
  };
}

export default RestApi;
