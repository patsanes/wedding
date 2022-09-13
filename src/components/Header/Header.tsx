import styles from "./Header.module.scss";
import { usePlatform } from "../../hooks/usePlatform";
import Names from "../../../public/main/header/names.svg";
import BranchTopLeft from "../../../public/main/header/branch-top-left.svg";
import BranchTopRight from "../../../public/main/header/branch-top-right.svg";
import BranchBottomLeft from "../../../public/main/header/branch-bottom-left.svg";
import BranchBottomRight from "../../../public/main/header/branch-bottom-right.svg";

export const Header = () => {
  const { isTablet } = usePlatform();

  return (
    <>
      <div className={styles.container}>
        {!isTablet && <BranchTopLeft className={styles.itemTopLeft} />}
        <BranchTopRight className={styles.itemTopRight} />
        {!isTablet && <div className={styles.space} />}
        <Names className={styles.names} />
        {isTablet ? (
          <BranchTopLeft className={styles.itemTopLeft} />
        ) : (
          <BranchBottomLeft className={styles.itemBottomLeft} />
        )}
        {!isTablet && <BranchBottomRight className={styles.itemBottomRight} />}

        {/* <Parallax opacity={[0, 1]} translateY={["-50%", "20%"]} scale={[0.75, 1]}>
        <CornerTopLeft />
      </Parallax> */}
      </div>
    </>
  );
};
