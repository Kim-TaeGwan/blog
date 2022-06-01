import React from "react";
import axios from "axios";

export default function Test({ res }: any) {
  console.log("test result : ", res);
  return <div>test : {res}</div>;
}

export const getServerSideProps = async () => {
  try {
    const res = await axios.get(`${process.env.FRONTEND_URL}/api/portfolio`);
    console.log("getServerSideProps  : ", getServerSideProps());
    return { props: res };
  } catch (error) {
    const res = error;
    console.log("error : ", error);
    return { props: res };
  }
};
