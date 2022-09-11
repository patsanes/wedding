import styles from "./Hashtag.module.scss";
import Link from "next/link";
import { usePlatform } from "../../hooks/usePlatform";
// import Names from "../../../public/main/header/names.svg";
import BranchLeft from "../../../public/main/hashtag/left.svg";
import BranchRight from "../../../public/main/hashtag/right.svg";
import BranchLeftMobile from "../../../public/main/hashtag/left-mobile.svg";
import BranchRightMobile from "../../../public/main/hashtag/right-mobile.svg";

// FIXME: wip svg responsive
export const Hashtag = () => {
  const { isTablet } = usePlatform();

  return (
    <div className={styles.container}>
      {isTablet ? (
        <BranchLeftMobile className={styles.itemLeft} />
      ) : (
        <BranchLeft className={styles.itemLeft} />
      )}
      <div className={styles.content}>
        <span className={styles.text}>
          DURANTE NUESTRA BODA UTILIZA EL HASHTAG
        </span>
        <span className={styles.link}>#GUSYPAT</span>
      </div>
      {isTablet ? (
        <BranchRightMobile className={styles.itemRight} />
      ) : (
        <BranchRight className={styles.itemRight} />
      )}
    </div>
  );
};
