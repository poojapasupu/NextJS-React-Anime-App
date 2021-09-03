import MediaList from "../components/media/MediaList";

import {internalPostRequest} from "../lib/api/internal-api";

function HomePage(props) {
  if (props.error) {
    return <p>{props.error}</p>;
  }
  return (
    <>
      <MediaList media={props.media}></MediaList>
    </>
  );
}

export async function getServerSideProps() {
  //fetch data from api
  const res = await internalPostRequest();

  return {
    props: {
      pageInfo:
        res.data && res.data.Page && res.data.Page.pageInfo
          ? res.data.Page.pageInfo
          : null,
      media:
        res.data && res.data.Page && res.data.Page.media
          ? res.data.Page.media
          : null,
      error: res.error ? res.error : null,
    },
  };
}

export default HomePage;
