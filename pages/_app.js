import GlobalStyle from "../styles";

export default function App({ Component, pageProps: { pageProps } }) {
  return (
    <>
      <GlobalStyle />

      <title>GraffStar</title>
      <Component {...pageProps} />
    </>
  );
}
