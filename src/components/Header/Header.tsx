import Image from "next/image";
import styles from "./Header.module.scss";
import { Countdown } from "../Countdown/Countdown";
import Names from "../../../public/main/names.svg";

export const Header = () => {
  return (
    <>
      <Names />
      <span className={styles.header}>Hola mundo</span>
      <Countdown />
    </>
  );
};
