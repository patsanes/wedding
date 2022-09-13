import { usePlatform } from "../../hooks/usePlatform";
// import styles from "./Rsvp.module.scss";

export const Rsvp = () => {
  const { size, isMobile } = usePlatform();
  return (
    <>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSc9jqGhoK4umgUtoKoVdYEBLqof6cqUy0yWJQnMSlGcI--c5Q/viewform?embedded=true"
        width={size.width}
        height={isMobile ? "1550" : "1350"}
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        // allowTransparency
      >
        Cargando formulario https://forms.gle/uKtwyJjqBaAFPRWZ9
      </iframe>
    </>
  );
};
