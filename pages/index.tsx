import type { NextPage } from "next";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";
import axios from "axios";
import Head from "next/head";

const Home: NextPage = () => {
  axios.defaults.withCredentials = true;

  return (
    <Layout>
      <Head>
        <title>taegwan`s dev blog</title>
        <meta property="og:title" content="taegwan's dev blog" />
        <meta property="og:description" content="개발자 김태관의 기술 블로그" />
        <meta property="og:image" content="https://taegwan.dev/preview.png" />
      </Head>
      <MainComponent />
    </Layout>
  );
};

export default Home;
