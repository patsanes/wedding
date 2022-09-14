import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#date">Fecha</a>
      <div className={styles.separator} />
      <a href="#address">Lugar</a>
      <div className={styles.separator} />
      <a href="#rsvp">Confirmación asistencia</a>
      <div className={styles.separator} />
      <a href="#gifts">Regalos</a>
    </div>
  );
};
