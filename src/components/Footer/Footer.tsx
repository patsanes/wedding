import Image from "next/image";
import WhatsappIcon from "../../../public/main/icons/wp.svg";

import styles from "./Footer.module.scss";

const wpGusNumber = "+598 94 040 117";
const wpPatNumber = "+598 98 557 755";
const wpGus = "https://wa.me/59894040117";
const wpPat = "https://wa.me/59898557755";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Nav */}
        <div className={styles.navBar}>
          <h2>Secciones</h2>
          <a href="#date">Fecha</a>
          <a href="#address">Lugar</a>
          <a href="#rsvp">Confirmación asistencia</a>
          <a href="#gifts">Regalos</a>
        </div>
        {/* Contact */}
        <div className={styles.contactContainer}>
          <h2>Contactanos</h2>
          <span className={styles.subtitle}>Si tienes alguna duda no dudes en escribirnos!</span>
          <div className={styles.numbers}>
            <a
              className={styles.whatsapp}
              onClick={() => window.open(wpGus, "_blank")}
            >
              <WhatsappIcon className={styles.logo} />
              <span> Gus - {wpGusNumber}</span>
            </a>
            <a
              className={styles.whatsapp}
              onClick={() => window.open(wpPat, "_blank")}
            >
              <WhatsappIcon className={styles.logo} />
              <span>Pat - {wpPatNumber}</span>
            </a>
            <a href="mailto:casamientogusypat@gmail.com?subject=Casamiento Gus y Pat&body=Tengo una duda">
              casamientogusypat@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <a>Powered by Zuri</a>
      </div>
    </footer>
  );
};
