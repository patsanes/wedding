import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxExample } from "../src/components/ParallaxExample/ParallaxExample";

const Parallax: NextPage = () => {
  return (
    <ParallaxProvider>
      <ParallaxExample />
    </ParallaxProvider>
  );
};

export default Parallax;
