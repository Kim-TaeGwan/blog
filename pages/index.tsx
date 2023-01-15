import type { NextPage } from "next";
import axios from "axios";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";

import Head from "next/head";

const Home: NextPage = ({ data }: any) => {
  axios.defaults.withCredentials = true;
  return (
    <Layout>
      <Head>
        <title>taegwan`s dev blog</title>
        <meta property="og:title" content="taegwan's dev blog" />
        <meta property="og:description" content="개발자 김태관의 기술 블로그" />
        <meta property="og:image" content="https://taegwan.dev/preview.png" />
      </Head>
      <MainComponent datas={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const portfolio = await axios.get(
    `${process.env.FRONT_URL}/api/blog/portfolio/list`
  );
  const study = await axios.get(
    `${process.env.FRONT_URL}/api/blog/studies/list`
  );
  const portfolioList = await portfolio.data;
  const studyList = await study.data;
  const data = {
    portfolioList,
    studyList,
  };
  return {
    props: { data },
  };
}

export default Home;
