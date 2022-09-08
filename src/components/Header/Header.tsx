import Image from "next/image";
import styles from "./Header.module.scss";
import Names from "../../../public/main/names.svg";

export const Header = () => {
  return (
    <>
      <Names />
      <span className={styles.header}>Hola mundo</span>
    </>
  );
};
