import { useRef } from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import styles from "./Countdown.module.scss";

export const Countdown = () => {
  return (
    <div className={styles.container}>
      <FlipCountdown
        endAt={"2022-10-22 18:30:00"} // Date/Time
        theme="dark"
      />
    </div>
  );
};
