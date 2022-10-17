import Head from "next/head";
import { Provider } from "react-redux";
import store from "@/store";

// import "antd/dist/antd.css";
import "@/styles/style.scss";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>F2E Project</title>
        <meta name="description" content="F2E Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
