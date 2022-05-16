import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";
import "styles/globals.css";
import { Element } from "react-scroll";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Element name="elementContainer" id="containerElement">
        <Component {...pageProps} />
      </Element>
    </RecoilRoot>
  );
}

export default MyApp;
