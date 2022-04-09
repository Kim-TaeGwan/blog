import type { NextPage } from "next";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";
import axios from "axios";

const Home: NextPage = () => {
  axios.defaults.withCredentials = true;

  return (
    <Layout>
      <MainComponent />
    </Layout>
  );
};

export default Home;
