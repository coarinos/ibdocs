import Head from "next/head";
import react from "react";
import Nav from '../components/header/Nav'
import Hero from '../components/Hero'
import Footer from '../components/footer/footer.jsx'
import TopResources from "../components/main/TopResources";

export default function Home() {
  return (
    <>
      <Head>
        <title>IB Documents & resources</title>
        <meta name="description" content="IB Documents repository" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="pt-navigation-heigh font-['Cera_Pro']">
        <div className="max-w-[1280px] mx-auto">
          <Hero/>
          <TopResources/>
        </div>
          <Footer/>
      </main>
    </>
  );
}