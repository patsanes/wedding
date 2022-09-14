import { usePlatform } from "../../hooks/usePlatform";
import styles from "./Rsvp.module.scss";

export const Rsvp = () => {
  const { size, isMobile, isTablet } = usePlatform();
  return (
    <div id="rsvp" className={styles.container}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc9jqGhoK4umgUtoKoVdYEBLqof6cqUy0yWJQnMSlGcI--c5Q/viewform?embedded=true"
        width={isTablet ? size.width : 640}
        height={isMobile ? "2150" : "1800"}
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Cargando formulario https://forms.gle/uKtwyJjqBaAFPRWZ9
      </iframe>
    </div>
  );
};
