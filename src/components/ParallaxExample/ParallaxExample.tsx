import React, { Component } from "react";
import { Intro } from "../Intro/Intro";
import { Svg } from "../Svg/Svg";
import { IntroCopy } from "../IntroCopy/IntroCopy";
import Marquee from "../Marquee/Marquee";
import Overlap from "../Overlap/Overlap";
import ShapeField from "../ShapeField/ShapeField";
import TriangleGrid from "../TriangleGrid/TriangleGrid";

import NoisePattern from "../../../public/parallax/noise-pattern.svg";
import DotPattern from "../../../public/parallax/dot-pattern.svg";

import styles from "./ParallaxExample.module.scss";

export const ParallaxExample = () => {
  return (
    <div className={styles.root}>
      <Intro />
      <IntroCopy />
      <ShapeField />
      <Marquee />
      <Overlap />
      <TriangleGrid />

      {/** Shared SVG patterns */}
      <div className={styles.visuallyHidden}>
        {/* <NoisePattern />
        <DotPattern /> */}
        <Svg svg={NoisePattern} />
        <Svg svg={DotPattern} />
      </div>
    </div>
  );
};
