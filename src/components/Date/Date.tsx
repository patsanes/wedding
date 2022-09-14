import Image from "next/image";
import React from "react";
import styles from "./Date.module.scss";

const Content = () => {
  return (
    <>
      <div className={styles.dateContainer}>
        <Image
          src="/main/date/date.png"
          width={361}
          height={104}
          layout="responsive"
          alt="date"
        />
      </div>
      <span className={styles.subtitle}>cena y fiesta toda la noche</span>
    </>
  );
};

export const Date = () => {
  return (
    <div className={styles.container} id="#hashtag">
      <div className={styles.imageContainer}>
        <Image
          src="/main/hashtag/branches-mobile.png"
          width={375}
          height={175}
          layout="responsive"
          alt="branches"
        />
      </div>

      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};
