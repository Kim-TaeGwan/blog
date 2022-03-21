import React from "react";
import axios from "axios";
import Layout from "@/layout";
import StudyTableComponent from "@/components/StudyTableComponent";

const Study = () => {
  axios.defaults.withCredentials = true;
  return (
    <Layout>
      <StudyTableComponent />
    </Layout>
  );
};

export default Study;
