import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  Header,
  Address,
  Gifts,
  Rsvp,
  Footer,
  Message,
  Date,
} from "../src/components";
import { ParallaxProvider } from "react-scroll-parallax";
// import ParallaxExample from '../src/parallax/original/components/ParallaxExample/ParallaxExample'
import styles from "../styles/Home.module.css";
import { Hashtag } from "../src/components/Hashtag/Hashtag";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wedding Gus & Pat</title>
        <meta
          name="description"
          content="Wedding of Gustavo Gard & Patricia Sanes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ParallaxProvider>
        <ParallaxExample />
      </ParallaxProvider> */}

      <ParallaxProvider>
        <main className={styles.main}>
          <Header />
          <Message />
          <Date />
          <Address />
          <Hashtag />
          <Gifts />
          <Rsvp />
        </main>
        <Footer />
      </ParallaxProvider>
    </div>
  );
};

export default Home;
