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
  Countdown,
  Layout,
  NavBar,
  Hashtag,
} from "../src/components";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const title = "Casamiento Gus & Pat";
  const description =
    "Te invitamos al casamiento de Gustavo Gard & Patricia Sanes";

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content="https://gusypat.com/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          itemProp="image"
          content="https://gusypat.com/main/horizontal.png"
        />
        <meta property="og:type" content="website" />
      </Head>

      {/* <ParallaxProvider>
        <ParallaxExample />
      </ParallaxProvider> */}

      <ParallaxProvider>
        <Layout>
          <Header />
          <NavBar />
          <Message />
          <Countdown />
          <Date />
          <Address />
          <Rsvp />
          <Hashtag />
          <Gifts />
          <Footer />
        </Layout>
      </ParallaxProvider>
    </div>
  );
};

export default Home;
