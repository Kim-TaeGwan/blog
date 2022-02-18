import type { NextPage } from "next";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";

const Home: NextPage = () => {
  return (
    <Layout>
      <MainComponent />
    </Layout>
  );
};

export default Home;
