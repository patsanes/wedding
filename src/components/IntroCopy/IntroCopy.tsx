import React from "react";
import styles from "./IntroCopy.module.scss";
import { Parallax } from "react-scroll-parallax";

const copy = "Parallax".split("");

export const IntroCopy = () => (
  <div className={styles.root}>
    <div className={styles.barTop} />
    <span className={`${styles.copy} h1`}>
      {copy.map((letter, i) => (
        <Parallax
          key={`copy-${i}`}
          translateX={[0, 100 * (i - 3)]}
          className={styles.letter}
        >
          {letter}
        </Parallax>
      ))}
    </span>
    <div className={styles.barBottom} />
  </div>
);
