import React from "react";
import { usePlatform } from "../../hooks/usePlatform";
import DateSvg from "../../../public/main/date.svg";
import BranchRight from "../../../public/main/date/branch-right.svg";
import BranchLeft from "../../../public/main/date/branch-left.svg";
import styles from "./Date.module.scss";

const Content = () => {
  return (
    <>
      <DateSvg className={styles.icon} />
      <span className={styles.subtitle}>cena y fiesta toda la noche</span>
    </>
  );
};

export const Date = () => {
  const { isMobile } = usePlatform();
  if (isMobile) {
    return (
      <div className={styles.container}>
        <BranchLeft className={styles.branchLeft} />
        <Content />
        <BranchRight className={styles.branchRight} />
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <BranchLeft className={styles.branchLeft} />
        <div className={styles.center}>
          <Content />
        </div>
        <BranchRight className={styles.branchRight} />
      </div>
    );
  }
};
