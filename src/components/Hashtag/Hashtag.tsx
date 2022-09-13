import styles from "./Hashtag.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePlatform } from "../../hooks/usePlatform";
// import Names from "../../../public/main/header/names.svg";
import BranchLeft from "../../../public/main/hashtag/left.svg";
import BranchRight from "../../../public/main/hashtag/right.svg";
import BranchLeftMobile from "../../../public/main/hashtag/left-mobile.svg";
import BranchRightMobile from "../../../public/main/hashtag/right-mobile.svg";
import BranchesMobile from "../../../public/main/hashtag/hashtag-branches-mobile.svg";

// FIXME: wip svg responsive
export const Hashtag = () => {
  const { isTablet } = usePlatform();

  return (
    <div className={styles.container}>
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
