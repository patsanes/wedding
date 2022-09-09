import React from "react";
import { Parallax } from "react-scroll-parallax";
import GridPurple from "../../../public/parallax/grid-purple.svg";
import GridWhite from "../../../public/parallax/grid-white.svg";
import AngleTop from "../../../public/parallax/angle-dark-top.svg";
import styles from "./TriangleGrid.module.scss";

const TriangleGrid = () => (
  <main className={styles.root}>
    <AngleTop className={styles.angleTop} />
    <article className={styles.copy}>
      <h1 className={styles.headline}>React Scroll Parallax</h1>
      <p>
        React hooks and components to create parallax scroll effects for
        banners, images or any other DOM elements.
      </p>
      <p>
        Utilizes{" "}
        <a href="https://parallax-controller.damnthat.tv/">
          Parallax Controller
        </a>{" "}
        to add vertical or horizontal scrolling based effects to elements.{" "}
      </p>
      <p>
        <a href="https://parallax-controller.damnthat.tv/docs/performance">
          Optimized
        </a>{" "}
        to reduce jank on scroll and works with SSR and SSG rendered React apps.
      </p>
      <p>
        <code>yarn add react-scroll-parallax</code>
        <code>npm i react-scroll-parallax</code>
      </p>
      <p>
        <a className="btn" href="https://react-scroll-parallax.damnthat.tv/">
          Documentation
        </a>
        <a
          className="btn"
          href="https://github.com/jscottsmith/react-scroll-parallax"
        >
          GitHub
        </a>
        <a
          className="btn"
          href="https://www.npmjs.com/package/react-scroll-parallax"
        >
          View on NPM
        </a>
      </p>
    </article>
    <div className={styles.container}>
      <Parallax translateY={[-25, 25]}>
        <GridPurple className={styles.trianglesPurple} />
      </Parallax>
      <Parallax translateX={[-13, 13]} translateY={[-50, 50]}>
        <GridWhite />
      </Parallax>
    </div>
  </main>
);

export default TriangleGrid;
