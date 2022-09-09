import React from "react";
import { Parallax } from "react-scroll-parallax";
import BoxBg from "../../../public/parallax/box-bg.svg";
import BoxOutline from "../../../public/parallax/box-outline.svg";
import Divider from "../../../public/parallax/divider.svg";
import styles from "./Marquee.module.scss";

const Marquee = () => (
  <div className={styles.root}>
    <Divider className={styles.divider} />
    <div className={styles.container}>
      <BoxBg className={styles.boxBg} />
      <Parallax
        className={styles.text}
        translateY={[-70, 70]}
        translateX={[30, -30]}
      >
        <span className="h1">Horizontal</span>
      </Parallax>
      <Parallax className={styles.boxOutline} translateY={[-35, 35]}>
        <BoxOutline />
      </Parallax>
    </div>
  </div>
);

export default Marquee;
