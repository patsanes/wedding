import React from "react";
import { Parallax } from "react-scroll-parallax";
import Ring from "../../../public/parallax/ring-of-dots.svg";
import Hemispheres from "../../../public/parallax/hemispheres.svg";
import styles from "./Intro.module.scss";

export const Intro = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Parallax translateY={[100, -100]} className={styles.ring}>
        <Ring />
      </Parallax>
      <Parallax translateY={[50, -50]} className={styles.circle}>
        <div className={styles.parallaxInner}>
          <div className={styles.circleInner} />
        </div>
      </Parallax>
      <Hemispheres className={styles.hemispheres} />
    </div>
    <p className={styles.scroll}>Scroll</p>
  </div>
);
