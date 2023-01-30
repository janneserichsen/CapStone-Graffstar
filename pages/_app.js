import GlobalStyle from "next";
import Head from "next/head";

export default function App({ Component, pageProps: { pageProps } }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>GraffStar</title>
        <Component {...pageProps} />
      </Head>
    </>
  );
}
