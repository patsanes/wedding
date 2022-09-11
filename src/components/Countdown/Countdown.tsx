import FlipCountdown from "@rumess/react-flip-countdown";
import styles from "./Countdown.module.scss";

export const Countdown = () => {
  return (
    <div className={styles.container}>
      <FlipCountdown
        endAt={"2022-10-22T18:30:00-03:00"} // Date/Time
        theme="dark" // light
        // titlePosition="bottom" // Options (Default: top): top, bottom.
        // size="large" // Options (Default: medium): large, medium, small, extra-small.
        yearTitle="Años"
        monthTitle="Meses"
        dayTitle="Dias"
        hourTitle="Horas"
        minuteTitle="Minutos"
        secondTitle="Segundos"
        hideYear
        onTimeUp={() => console.log("Time's up ⏳")}
        endAtZero
      />
    </div>
  );
};
