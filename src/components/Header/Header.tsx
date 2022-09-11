import styles from "./Header.module.scss";
import { usePlatform } from "../../hooks/usePlatform";
import Names from "../../../public/main/header/names.svg";
import BranchTopLeft from "../../../public/main/header/branch-top-left.svg";
import BranchTopRight from "../../../public/main/header/branch-top-right.svg";
import BranchBottomLeft from "../../../public/main/header/branch-bottom-left.svg";
import BranchBottomRight from "../../../public/main/header/branch-bottom-right.svg";

export const Header = () => {
  const { isMobile } = usePlatform();

  return (
    <div className={styles.container}>
      {!isMobile && <BranchTopLeft className={styles.itemTopLeft} />}
      <BranchTopRight className={styles.itemTopRight} />
      {!isMobile && <div className={styles.space} />}
      <Names className={styles.names} />
      {isMobile ? (
        <BranchTopLeft className={styles.itemTopLeft} />
      ) : (
        <BranchBottomLeft className={styles.itemBottomLeft} />
      )}
      {!isMobile && <BranchBottomRight className={styles.itemBottomRight} />}
    </div>
  );
};
