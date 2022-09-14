import React from "react";
import styles from "./Message.module.scss";

export const Message = () => {
  return (
    <div className={styles.container} id="#message">
      <span className={styles.header}>¡Nos Casamos!</span>
      <span className={styles.subtitle}>
        Esperamos que nos acompañen en este día tan especial
      </span>
    </div>
  );
};
