import type { NextPage } from "next";
import axios from "axios";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";

const Home: NextPage = ({ data }: any) => {
  axios.defaults.withCredentials = true;
  return (
    <Layout>
      <MainComponent datas={data} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const portfolio = await axios.get(`${process.env.FRONT_URL}/api/portfolio`);
  const study = await axios.get(`${process.env.FRONT_URL}/api/study`);
  const portfolioList = await portfolio.data;
  const studyList = await study.data;
  const data = {
    portfolioList,
    studyList,
  };
  console.log("main ssr : ", data);
  return {
    props: { data },
  };
}

export default Home;
