import "../styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";
// import { ParallaxExample } from "../src/components/ParallaxExample/ParallaxExample";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
