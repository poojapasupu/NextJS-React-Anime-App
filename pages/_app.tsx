import type { AppProps } from 'next/app'
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import {MediaContextProvider} from '../store/media-context';

const MyApp = ({ Component, pageProps } : AppProps) => {
  return (
    <MediaContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediaContextProvider>
  );
};

export default MyApp;
