import Image from "next/image";
import React, { FC } from "react";
import styles from "./Map.module.scss";

type PlaceProps = {
  header: string;
  place: string;
  info: string;
  image: string;
};

const Place: FC<PlaceProps> = ({ header, place, info, image }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <div className={styles.bottom}>
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="hotel" src={image} width={367} height={244} />
      </div>
    </div>
  );
};

export const MapChurch = () => {
  return (
    <Place
      header="Religioso"
      place="Iglesia San José de Manga"
      info="18:30 puntual"
      image="/main/maps/church.jpeg"
    />
  );
};

export const MapEvent = () => {
  return (
    <Place
      header="Fiesta"
      place="Regency Park Hotel"
      info="Salón Los Olivos"
      image="/main/maps/hotel.jpeg"
    />
  );
};
