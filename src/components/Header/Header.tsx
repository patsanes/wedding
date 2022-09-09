import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import styles from "./Header.module.scss";
import { Countdown } from "../Countdown/Countdown";
import Names from "../../../public/main/names.svg";
import Leaves from "../../../public/main/leaves.svg";
import CorderBottomRight from "../../../public/main/corner-bottom-right.svg";
import CornerTopLeft from "../../../public/main/corner-top-left.svg";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
        <Parallax translateY={[100, -100]} className={styles.leaves}>
          <CornerTopLeft />
        </Parallax>
      </div>
      <div className={styles.two}></div>
      <div className={styles.three}>
        <Parallax translateY={[100, -100]} className={styles.leaves}>
          <Leaves />
        </Parallax>
      </div>
      <div className={styles.four}></div>
      <div className={styles.five}>
        <Parallax translateY={[50, -50]} className={styles.circle}>
          <Names className={styles.names} />
        </Parallax>
      </div>
      <div className={styles.six}></div>
      <div className={styles.seven}>
        <Parallax translateY={[50, -50]} className={styles.circle}>
          <CorderBottomRight />
        </Parallax>
      </div>
      <div className={styles.eight}></div>
      <div className={styles.nine}>
        <Parallax translateY={[50, -50]} className={styles.leavesBottomRight}>
          <CorderBottomRight />
        </Parallax>
      </div>
      <div className={"four"}>Four</div>
      <div className={"five"}>Five</div>
      <div className={"six"}>Six</div>
    </div>
  );
};
