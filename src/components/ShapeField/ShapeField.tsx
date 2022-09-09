import React, { Component } from "react";
import { Parallax } from "react-scroll-parallax";

import styles from "./ShapeField.module.scss";

import Cluster01HemiLeft from "../../../public/parallax/cluster-01-hemi-left.svg";
import Cluster01HemiRight from "../../../public/parallax/cluster-01-hemi-right.svg";
import Cluster01Rect from "../../../public/parallax/cluster-01-rect.svg";

import Cluster02Hemi from "../../../public/parallax/cluster-02-hemi.svg";
import Cluster02TriangleBig from "../../../public/parallax/cluster-02-triangle-big.svg";
import Cluster02TriangleSmall from "../../../public/parallax/cluster-02-triangle-small.svg";

import Cluster03TriangleTop from "../../../public/parallax/cluster-03-triangle-top.svg";
import Cluster03TriangleBottom from "../../../public/parallax/cluster-03-triangle-bottom.svg";
import Cluster03TriangleBig from "../../../public/parallax/cluster-03-triangle-big.svg";

import Cluster04Triangle from "../../../public/parallax/cluster-04-triangle.svg";
import Cluster04Square from "../../../public/parallax/cluster-04-square.svg";
import Cluster04HemiRight from "../../../public/parallax/cluster-04-hemi-right.svg";

export default class ShapeField extends Component {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.shapeCluster01}>
          <Parallax
            translateY={[100, -100]}
            className={styles.hemiLeft}
            // slowerScrollRate
          >
            <Cluster01HemiLeft />
          </Parallax>
          <Cluster01Rect />
          <Parallax translateY={[-100, 100]} className={styles.hemiRight}>
            <Cluster01HemiRight />
          </Parallax>
        </div>

        <div className={styles.shapeCluster02}>
          <Cluster02Hemi className={styles.hemi} />
          <Parallax translateY={[-30, 30]} className={styles.triangleBig}>
            <Cluster02TriangleBig />
          </Parallax>
          <Parallax translateY={[30, -30]} className={styles.triangleSmall}>
            <Cluster02TriangleSmall />
          </Parallax>
        </div>

        <div className={styles.shapeCluster03}>
          <Parallax translateY={[60, -20]} className={styles.triangleTop}>
            <Cluster03TriangleTop />
          </Parallax>

          <Cluster03TriangleBottom className={styles.triangleTop} />
          <Parallax translateY={[-60, 60]} className={styles.triangleBig}>
            <Cluster03TriangleBig />
          </Parallax>
        </div>

        <div className={styles.shapeCluster04}>
          <Cluster04Square className={styles.square} />
          <Parallax translateY={[-60, 60]} className={styles.triangle}>
            <Cluster04Triangle />
          </Parallax>
          <Parallax translateY={[-30, 30]} className={styles.hemiRight}>
            <Cluster04HemiRight />
          </Parallax>
        </div>
      </div>
    );
  }
}
