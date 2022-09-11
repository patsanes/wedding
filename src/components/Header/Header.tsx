import Image from "next/image";
import styles from "./Header.module.scss";
import { Countdown } from "../Countdown/Countdown";
import {
  Names,
  CornerTopLeft,
  Leave,
  CornerBottomRight,
} from "../../../public/main";
import { Parallax } from "react-scroll-parallax";

export const Header = () => {
  return (
    <>
      {/* <div style={{ position: "absolute", top: 0, left: 0 }}> */}
      <Parallax
        opacity={[0, 1]}
        translateY={["-50%", "20%"]}
        style={
          {
            // width: "10rem",
            // height: "10rem",
            // perspective: "500px",
          }
        }
        scale={[0.75, 1]}
      >
        <CornerTopLeft />
      </Parallax>
      {/* </div> */}

      {/* </div>
      <div style={{ height: "300px" }}> */}
      <Names />
      {/* </div> */}

      <span className={styles.header}>Hola mundo</span>
      <Countdown />
    </>
  );
};
