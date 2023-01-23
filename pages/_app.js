import GlobalStyle from "@/styles";
import Head from "next/head";
import DiscoverPage from "./feed";
import Navbar from "./navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <DiscoverPage />
      <Navbar />
    </>
  );
}
