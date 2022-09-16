import styles from "./Header.module.scss";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { usePlatform } from "../../hooks/usePlatform";
import Names from "../../../public/main/header/names.svg";
import NamesMobile from "../../../public/main/header/names-mobile.svg";
import BranchTopLeft from "../../../public/main/header/images/top-left.svg";
import BranchTopRight from "../../../public/main/header/images/top-right.svg";
import BranchTopRightMobile from "../../../public/main/header/images/top-right-mobile.svg";
import BranchBottomLeft from "../../../public/main/header/images/bottom-left.svg";
import BranchBottomLeftMobile from "../../../public/main/header/images/bottom-left-mobile.svg";
import BranchBottomRight from "../../../public/main/header/images/bottom-right.svg";

export const Header = () => {
  const { isTablet, isMobile } = usePlatform();

  return (
    <>
      <div className={styles.container} id="#">
        {!isTablet && <BranchTopLeft className={styles.itemTopLeft} />}

        {isTablet ? (
          <BranchTopRightMobile className={styles.itemTopRight} />
        ) : (
          <BranchTopRight className={styles.itemTopRight} />
        )}
        {!isTablet && <div className={styles.space} />}
        <Parallax
          speed={-10}
          translateY={["0", "20%"]}
          scale={isTablet ? [1, 1] : [2, 1.5]}
          className={styles.names}
        >
          <div className={styles.namesContainer}>
            {isMobile ? <NamesMobile /> : <Names />}
          </div>
        </Parallax>
        {isTablet ? (
          <BranchBottomLeftMobile
            className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
          />
        ) : (
          <BranchBottomLeft
            className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
          />
        )}
        {!isTablet && <BranchBottomRight className={styles.itemBottomRight} />}
      </div>
    </>
  );
};
