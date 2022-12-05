import Head from "next/head";
import "tailwindcss/tailwind.css";
import Nav from "../components/header/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;