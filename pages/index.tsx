import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Scroll from "../components/Scroll";

//nextpage is a type exported by nextjs.when we write page:nextpage 
//we're saying that our page component is of type nextpage

const Home: NextPage = () => {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Janhvi Singh|Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Scroll />
    </div>
  );
};

export default Home;
