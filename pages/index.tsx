import type { NextPage } from "next";
import axios from "axios";
import Layout from "layout";
import MainComponent from "@/components/MainComponent";

import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = ({ data }: any) => {
  axios.defaults.withCredentials = true;

  useEffect(() => {
    alert("현재 서버 개선 작업중입니다...");
  });
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
  // const portfolio = await axios.get(`${process.env.FRONT_URL}/api/portfolio`);
  // const study = await axios.get(`${process.env.FRONT_URL}/api/study`);
  // const portfolioList = await portfolio.data;
  // const studyList = await study.data;
  const portfolioList = [
    {
      _id: 1,
      tag: '"HTML,"CSS","JavaScript", "jQuery"',
      title: "WEBAPPLAYERS",
      comment: "첫번째 작업물, 반응형 X",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/firstPortFolio.PNG",
      url: "http://elric.dothome.co.kr/",
    },
    {
      _id: 2,
      tag: '"HTML,"CSS","JavaScript", "React"',
      title: "O& Ent 회사소개 페이지",
      comment: "O&Ent 회사소개 페이지 제작 , 반응형 작업",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/O%26+Ent.png",
      url: "http://www.onent.co.kr/",
    },
    {
      _id: 3,
      tag: '"HTML,"CSS","JavaScript", "React","Next"',
      title: "Khanteum(PushMyDream) 서비스 제작",
      comment: "Khanteum 서비스 제작, 적응형 작업",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/Khanteum(PushMyDream).png",
      url: "https://m.khanteum.com/",
    },
    {
      _id: 4,
      tag: '"HTML,"CSS","JavaScript", "React"',
      title: "Habit Tracker",
      comment: "Habit Tracker(todoApp)",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/Habit+Tracker.png",
      url: "https://kim-taegwan.github.io/habit_tracker/",
    },
    {
      _id: 5,
      tag: '"HTML,"CSS","JavaScript", "React","Node","AWS",\'MySQL"',
      title: "Blog",
      comment: "기술 블로그, 반응형, React, Node, AWS, MongoDB",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/blog.png",
      url: "http://elric.dev/",
    },
    {
      _id: 6,
      tag: '"HTML,"CSS","JavaScript", "React","YoutubeApi"',
      title: "React-Youtube",
      comment: "Youtube Api를 이용한 프로젝트, 반응형",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/React-YouTube.png",
      url: "http://elric.dev/react-youtube",
    },
    {
      _id: 7,
      tag: '"HTML,"CSS","JavaScript", "React","FireBase"',
      title: "Business Card Maker",
      comment:
        "Fire Base를 이용한 Business Card Maker(로그인 서버, 실시간 데이터베이스)",
      img_url:
        "https://elric-blog.s3.ap-northeast-2.amazonaws.com/PortfoiloThumbnail/Habit+Tracker.png",
      url: "https://elric.dev/card-maker/",
    },
  ];
  const studyList = [
    {
      _id: 1,
      category: "Blog",
      title: "블로그",
      url: "https://www.notion.so/Framework-Library-d6f4a52aa6a04e6db32c1b3fc7b81b10",
    },
    {
      _id: 2,
      category: "Node",
      title: "Heroku 주의 사항",
      url: "https://www.notion.so/Heroku-b420219e0534444c807bec5de1c0ae75",
    },
    {
      _id: 3,
      category: "Node",
      title: "Get, Post 차이",
      url: "https://www.notion.so/Get-Post-7ddad09c750b4910bf6aba36d965e011",
    },
    {
      _id: 4,
      category: "Node",
      title: "Node에서의 this란?",
      url: "https://www.notion.so/Node-this-e2baad53fbe146bb96f4a76ab3889f3c",
    },
    {
      _id: 5,
      category: "JS",
      title: "Number() vs parseInt()",
      url: "https://www.notion.so/Number-vs-parseInt-342343e577114daf87f8d9e4924fab72",
    },
    {
      _id: 6,
      category: "JS",
      title: "스코프(Scope)",
      url: "https://www.notion.so/Scope-0a41d3a21dd34b42a980d10441fe2fde",
    },
    {
      _id: 7,
      category: "React",
      title: "스토리북(react-storybook)",
      url: "https://www.notion.so/react-storybook-b4c3402c4715413a9dc47237f4ecff1d",
    },
    {
      _id: 8,
      category: "React",
      title: "커링(Currying) 01",
      url: "https://www.notion.so/Currying-01-4b97805e6ce24fd0bea09f67be91ce56",
    },
    {
      _id: 9,
      category: "React",
      title: "커링(Currying) 02",
      url: "https://www.notion.so/Currying-02-ba901454db8442999b73cfee811b8964",
    },
    {
      _id: 10,
      category: "React",
      title: "커링(Currying) 03",
      url: "https://www.notion.so/Currying-03-ae69d1db9b6c431d8da4acf761bb8bb7",
    },
    {
      _id: 11,
      category: "React",
      title: "뒤로가기, 앞으로 가기 버튼 구현하기",
      url: "https://www.notion.so/93449e74764a4fb7a899f5fe7933fa70",
    },
    {
      _id: 12,
      category: "React",
      title: "React를 이용해 Github Pages에 배포하기!",
      url: "https://www.notion.so/React-Github-Pages-9146d1a3d80f4ce08a514e8d4d58b7d2",
    },
    {
      _id: 13,
      category: "React",
      title: "자바스크립트 브라우저 이슈",
      url: "https://www.notion.so/f81b5a5962c04f48bbc426baf7b73d0f",
    },
    {
      _id: 14,
      category: "React",
      title: "Context API를 사용한 전역 값 관리",
      url: "https://www.notion.so/Context-API-d1e207d340954318800316f60247861d",
    },
    {
      _id: 15,
      category: "React",
      title: "match.params를 이용하여 데이터 넘기기",
      url: "https://www.notion.so/match-params-eb51410bd26f442da2af15cb66e88680",
    },
  ];
  const data = {
    portfolioList,
    studyList,
  };
  return {
    props: { data },
  };
}

export default Home;
