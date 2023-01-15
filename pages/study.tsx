import React from "react";
import axios from "axios";
import Layout from "@/layout";
import StudyTableComponent from "@/components/StudyTableComponent";

const Study = ({ studyList }: any) => {
  axios.defaults.withCredentials = true;

  return (
    <Layout>
      <StudyTableComponent list={studyList} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const study = await axios.get(
    `${process.env.FRONT_URL}/api/blog/studies/list`
  );
  const studyList = await study.data;
  return {
    props: { studyList },
  };
}

export default Study;
