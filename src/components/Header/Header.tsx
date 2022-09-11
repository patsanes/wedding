import Image from "next/image";
import styles from "./Header.module.scss";
import { Countdown } from "../Countdown/Countdown";
import { isMobile } from "react-device-detect";
import Names from "../../../public/main/header/names.svg";
import BranchTopLeft from "../../../public/main/header/branch-top-left.svg";
import BranchTopRight from "../../../public/main/header/branch-top-right.svg";
import BranchBottomLeft from "../../../public/main/header/branch-bottom-left.svg";
import BranchBottomRight from "../../../public/main/header/branch-bottom-right.svg";

export const Header = () => {
  if (isMobile) {
    return null;
  }

  return (
    <div className={styles.container}>
      <BranchTopLeft className={styles.itemTopLeft} />
      <BranchTopRight className={styles.itemTopRight} />
      <div className={styles.space}/>
      <Names className={styles.names} />
      <BranchBottomLeft className={styles.itemBottomLeft} />
      <BranchBottomRight className={styles.itemBottomRight} />
    </div>
  );
};
