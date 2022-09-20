import { url } from "inspector";
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
  url: string;
};

const PlaceMobile: FC<PlaceProps> = ({
  header,
  place,
  info,
  image,
  alt,
  url,
}) => {
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
        <a
          className={styles.bottom}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </a>
      </div>
    </div>
  );
};

const PlaceDesktop: FC<PlaceProps> = ({
  header,
  place,
  info,
  image,
  alt,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <a
          className={styles.bottom}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image alt={alt} src={image} width={367 * 2} height={244 * 2} />
      </div>
    </div>
  );
};

const urls = {
  church:
    "https://www.google.com/maps/place/Capilla+San+Jos%C3%A9+de+Manga,+Montevideo/@-34.7892886,-56.0781287,17z/data=!3m1!4b1!4m5!3m4!1s0x95a0290654444c2b:0x69d3db5709d7124d!8m2!3d-34.7892886!4d-56.0781287",
  party:
    "https://www.google.com/maps/place/Regency+Park+Hotel/@-34.7893193,-56.0795449,17z/data=!3m1!4b1!4m8!3m7!1s0x95a02907b4b2c91b:0x2f827123d1f24eb1!5m2!4m1!1i2!8m2!3d-34.7893193!4d-56.0795449",
};

export const MapChurch = () => {
  const { isMobile } = usePlatform();
  const Church = isMobile ? PlaceMobile : PlaceDesktop;
  return (
    <Church
      header="CEREMONIA"
      place="Iglesia San José de Manga"
      info="18:30 puntual"
      alt="church"
      image="/main/maps/church.jpeg"
      url={urls.church}
    />
  );
};

export const MapEvent = () => {
  const { isMobile } = usePlatform();
  const Event = isMobile ? PlaceMobile : PlaceDesktop;

  return (
    <Event
      header="FIESTA"
      place="Regency Park Hotel"
      info="Salón Los Olivos"
      alt="party"
      url={urls.party}
      image="/main/maps/hotel.jpeg"
    />
  );
};
