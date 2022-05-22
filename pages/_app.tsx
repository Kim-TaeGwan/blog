import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import preview from "assets/image/preview.png";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Head>
        <title>taegwan`s dev blog</title>
        <meta property="og:title" content="taegwan`s dev blog" />
        <meta property="og:description" content="개발자 김태관의 기술 블로그" />
        {/*<meta property="og:image" content={preview} />*/}
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
