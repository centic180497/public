import { Provider } from "react-redux";
import Head from "next/head";

import store from "../redux/stores";
import "../public/global.css";
import "../pages/violation/googlemap_violation/marker/style.css";
import "../pages/violation/search_violation/style.css";
import "../pages/violation/header_table/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "react-image-gallery/styles/css/image-gallery.css";

function MyApp({ Component, pageProps }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,600;0,700;1,400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
          <Component {...pageProps} />
      </Provider>
    </html>
  );
}

export default MyApp;
