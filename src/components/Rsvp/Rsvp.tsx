import { usePlatform } from "../../hooks/usePlatform";
import styles from "./Rsvp.module.scss";

export const Rsvp = () => {
  const { size, isMobile, isTablet } = usePlatform();
  return (
    <div id="rsvp" className={styles.container}>
      <h1>Formulario de asistencia</h1>
      <div className={styles.message}>
        <span>
          Es importante para nosotros que nos acompañes, por favor confirmar
          asistencia con el siguiente formulario antes del 10.10.22
        </span>
      </div>
      <div className={styles.frame}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9jqGhoK4umgUtoKoVdYEBLqof6cqUy0yWJQnMSlGcI--c5Q/viewform?embedded=true"
          width={isTablet ? size.width : 640}
          height={isMobile ? 2300 : 1950}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
        >
          Cargando formulario https://forms.gle/uKtwyJjqBaAFPRWZ9
        </iframe>
      </div>
    </div>
  );
};
