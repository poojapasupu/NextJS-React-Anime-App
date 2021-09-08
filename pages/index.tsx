import { GetServerSideProps } from "next";
import { Media, PageInfo } from "../interfaces";
import MediaList from "../components/media/MediaList";
import { internalPostRequest } from "../lib/api/internal-api";

type Props = {
  pageInfo: PageInfo;
  media: Media[];
  error: string;
};

const HomePage: React.FC<Props> = (props) => {
  if (props.error) {
    return <p>{props.error}</p>;
  }
  return <MediaList media={props.media}></MediaList>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  //fetch data from api
  const res = await internalPostRequest(null);

  return {
    props: {
      pageInfo: res?.data?.Page?.pageInfo ?? null,
      media: res?.data?.Page?.media ?? null,
      error: res?.error ?? null,
    },
  };
};

export default HomePage;
