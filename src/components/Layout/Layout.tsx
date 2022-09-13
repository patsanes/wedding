import { FC } from "react";
import styles from "./Layout.module.scss";

import BranchTopLeft from "../../../public/main/layout/branch-blur-top-left.svg";
import BranchTopRight from "../../../public/main/layout/branch-blur-top-right.svg";
import BranchBottomLeft from "../../../public/main/layout/branch-blur-bottom-left.svg";
import BranchBottomRight from "../../../public/main/layout/branch-blur-bottom-right.svg";
import { usePlatform } from "../../hooks/usePlatform";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const { isTablet } = usePlatform();
  return (
    <>
      <main className={styles.main}>{children}</main>
      <div className={styles.overlay}>
        <div className={styles.container}>
          {!isTablet && <BranchTopLeft className={styles.itemTopLeft} />}
          <BranchTopRight className={styles.itemTopRight} />
          {!isTablet && <div className={styles.space} />}
          <BranchBottomLeft className={styles.itemBottomLeft} />
          {!isTablet && (
            <BranchBottomRight className={styles.itemBottomRight} />
          )}
        </div>
      </div>
    </>
  );
};
