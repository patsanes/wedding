import styles from "./Hashtag.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePlatform } from "../../hooks/usePlatform";

// FIXME: wip svg responsive
export const Hashtag = () => {
  const { isTablet } = usePlatform();

  return (
    <div className={styles.container} id="#hashtag">
      <div className={styles.imageContainer}>
        <Image
          src="/main/hashtag/branches-mobile.png"
          width={375}
          height={175}
          layout="responsive"
          alt="branches"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.text}>
          DURANTE NUESTRA BODA UTILIZA EL HASHTAG
        </span>
        <span className={styles.link}>#GUSYPAT</span>
      </div>
    </div>
  );
};
