import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layouts/PreLoader";
import "../styles/globals.css";
const App = ({ Component, pageProps }) => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>BOUHMADY Abdelilah | B.CNS</title>
        <meta name="description" content="I am Abdilah Bouhmady, a student in applied mathematics and a data analyst"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="bslthemes" />
               {/* Facebook Meta Tags */}
               <meta property="og:url" content="https://abouhmady.info/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BOUHMADY Abdelilah | B.CNS" />
        <meta
          property="og:description"
          content="I am Abdelilah Bouhmady, a PhD student in applied mathematics and a data analyst"
        />
        <meta
          property="og:image"
          content="https://abouhmady.info/assets/images/profile2.png"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="https://abouhmady.info/" />
        <meta property="twitter:url" content="https://abouhmady.info/" />
        <meta name="twitter:title" content="BOUHMADY Abdelilah | Portfolio" />
        <meta
          name="twitter:description"
          content="I am Abdelilah Bouhmady, a PhD student in applied mathematics and a data analyst"
        />
        <meta
          name="twitter:image"
          content="https://abouhmady.info/assets/images/profile2.png"
        />
      
        






        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto"
          type="text/css"
          media="all"
        />
        {/* CSS STYLES */}
        <link
          rel="stylesheet"
          href="assets/css/vendors/bootstrap.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/fonts/font-awesome/css/font-awesome.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/magnific-popup.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/splitting.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/swiper.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/vendors/animate.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/style.css"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="assets/css/dark.css"
          type="text/css"
          media="all"
        />
        {/* Favicon */}
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {loader && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
};
export default App;
