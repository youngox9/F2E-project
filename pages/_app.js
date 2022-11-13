import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";
import $ from "jquery";
import { gtag, install } from "ga-gtag";
import { useEffect } from "react";

import fb_meta_image from "/public/fb.png";

import "@/styles/style.scss";

function App({ Component, pageProps }) {
  useEffect(() => {
    window.$ = $;
    install("G-J3EVKW411S");
  }, []);
  return (
    <Provider store={store}>
      <Head>
        <title>Week1 - The F2E 活動網站設計</title>
        <meta name="description" content="Week1 - The F2E 活動網站設計" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Week1 - The F2E 活動網站設計" />
        <meta
          property="og:description"
          content="Week1 - The F2E 活動網站設計"
        />
        <meta property="og:site_name" content="Week1 - The F2E 活動網站設計" />
        <meta property="og:image" content={fb_meta_image?.src} />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
