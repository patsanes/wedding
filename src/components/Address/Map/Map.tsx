import Image from "next/image";
import React, { FC } from "react";
import { usePlatform } from "../../../hooks/usePlatform";
import styles from "./Map.module.scss";

type PlaceProps = {
  header: string;
  place: string;
  info: string;
  image: string;
  alt: string;
};

const PlaceMobile: FC<PlaceProps> = ({ header, place, info, image, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <div className={styles.imageContainer}>
          <Image
            alt={alt}
            src={image}
            width={367}
            height={244}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={styles.bottom}>
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </div>
      </div>
    </div>
  );
};

const PlaceDesktop: FC<PlaceProps> = ({ header, place, info, image, alt }) => {
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
        <Image alt={alt} src={image} width={367 * 2} height={244 * 2} />
      </div>
    </div>
  );
};

export const MapChurch = () => {
  const { isMobile } = usePlatform();
  return isMobile ? (
    <PlaceMobile
      header="RELIGIOSO"
      place="Iglesia San José de Manga"
      info="18:30 puntual"
      alt="church"
      image="/main/maps/church.jpeg"
    />
  ) : (
    <PlaceDesktop
      header="RELIGIOSO"
      place="Iglesia San José de Manga"
      info="18:30 puntual"
      image="/main/maps/church.jpeg"
      alt="church"
    />
  );
};

export const MapEvent = () => {
  const { isMobile } = usePlatform();

  return isMobile ? (
    <PlaceMobile
      header="FIESTA"
      place="Regency Park Hotel"
      info="Salón Los Olivos"
      alt="party"
      image="/main/maps/hotel.jpeg"
    />
  ) : (
    <PlaceDesktop
      header="FIESTA"
      place="Regency Park Hotel"
      info="Salón Los Olivos"
      alt="party"
      image="/main/maps/hotel.jpeg"
    />
  );
};
