import { MoralisProvider } from "react-moralis";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider initializeOnMount={false}>
      <Head>
        <link rel="icon" type="image/png" href="/logo.jpeg" />
        <script async src="https://saturn.tech/widget.js"></script>
      </Head>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
