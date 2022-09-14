import styles from "./Header.module.scss";
import { Parallax } from "react-scroll-parallax";
import { usePlatform } from "../../hooks/usePlatform";
import Names from "../../../public/main/header/names.svg";
import NamesMobile from "../../../public/main/header/names-mobile.svg";
import BranchTopLeft from "../../../public/main/header/branch-top-left.svg";
import BranchTopRight from "../../../public/main/header/branch-top-right.svg";
import BranchBottomLeft from "../../../public/main/header/branch-bottom-left.svg";
import BranchBottomRight from "../../../public/main/header/branch-bottom-right.svg";

export const Header = () => {
  const { isTablet, isMobile } = usePlatform();

  return (
    <>
      <div className={styles.container} id="#">
        {!isTablet && (
          <Parallax
            opacity={[0.5, 1]}
            translateX={undefined}
            translateY={["20%", "0%"]}
            scale={isTablet ? [1, 1] : [2, 1]}
            className={styles.itemTopLeft}
          >
            <BranchTopLeft />
          </Parallax>
        )}

        <Parallax
          opacity={[0.5, 1]}
          translateY={["20%", "0%"]}
          scale={isTablet ? [1, 1] : [2, 1]}
          className={styles.itemTopRight}
        >
          <BranchTopRight />
        </Parallax>
        {!isTablet && <div className={styles.space} />}
        <Parallax
          opacity={[0.5, 1]}
          translateY={["20%", "0%"]}
          scale={isTablet ? [1, 1] : [2, 1]}
          className={styles.names}
        >
          {isMobile ? <NamesMobile /> : <Names />}
        </Parallax>
        <Parallax
          opacity={[0.5, 1]}
          translateY={["20%", "0%"]}
          scale={isTablet ? undefined : [2, 1]}
          className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
        >
          {isTablet ? <BranchTopLeft /> : <BranchBottomLeft />}
        </Parallax>
        {!isTablet && (
          <Parallax
            opacity={[0.5, 1]}
            translateY={["20%", "0%"]}
            scale={isTablet ? undefined : [2, 1]}
            className={styles.itemBottomRight}
          >
            <BranchBottomRight />
          </Parallax>
        )}
      </div>
    </>
  );
};
