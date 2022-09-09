import type { NextPage } from "next";
import Head from "next/head";
import { Header, Address, Gifts, Rsvp, Footer } from "../src/components";
import { IntroCopy } from "../src/components/IntroCopy/IntroCopy";
import Overlap from "../src/components/Overlap/Overlap";
import ShapeField from "../src/components/ShapeField/ShapeField";
import TriangleGrid from "../src/components/TriangleGrid/TriangleGrid";
import styles from "../styles/Home.module.css";

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

      <main className={styles.main}>
        <Header />
        <Address />
        <Overlap />
        <ShapeField />
        <TriangleGrid />
        <Gifts />
        <Rsvp />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
