import React from "react";
import styles from "./Message.module.scss";

export const Message = () => {
  return (
    <div className={styles.container} id="#message">
      <span className={styles.header}>¡Nos Casamos!</span>
      <span className={styles.subtitle}>
        Después de tanta espera... finalmente es el día!
      </span>
      <span className={styles.subtitle}>Esperamos puedas ser parte de él</span>
    </div>
  );
};
