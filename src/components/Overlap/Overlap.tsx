import React from "react";
import { Parallax } from "react-scroll-parallax";
import Circle from "../../../public/parallax/circle.svg";
import CircleRings from "../../../public/parallax/circle-rings.svg";
import styles from "./Overlap.module.scss";

const Overlap = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Parallax translateY={[-50, 50]} translateX={[-40, 20]}>
        <Circle />
      </Parallax>
      <Parallax
        translateY={[-50, 50]}
        translateX={[40, -20]}
        className={styles.circleRings}
      >
        <CircleRings />
      </Parallax>
    </div>
  </div>
);

export default Overlap;
