import { FC } from "react";
import Image from "next/image";
import styles from "./Gifts.module.scss";
import { usePlatform } from "../../hooks/usePlatform";

type BankProps = {
  bank?: string;
  account: string;
  branch?: string;
};

const Bank: FC<BankProps> = ({ bank, account, branch }) => {
  return (
    <div className={styles.bankAccountContainer}>
      {branch && <span>{branch}</span>}
      <span>{account}</span>
    </div>
  );
};

export const Gifts = () => {
  const { isMobile } = usePlatform();

  const redirectToStore = () => {
    window.open(
      "https://www.laiberica.com.uy/weddings/gard-ferronato-sanes-lezcano/public_list",
      "_blank"
    );
  };

  return (
    <div id="gifts" className={styles.container}>
      <h1>Lista de regalos</h1>
      <div className={styles.content}>
        <div className={styles.data}>
          <h2>Cuentas bancarias</h2>
          <div className={styles.banks}>
            <div className={styles.sameBank}>
              <h3 className={styles.header}>Santander</h3>
              <div className={styles.account}>
                <Bank account="USD - 5202838326" branch="Sucursal: 02" />
                <Bank account="UYU - 1202682339" branch="Sucursal: 02" />
              </div>
            </div>
            <div className={styles.sameBank}>
              <h3 className={styles.header}>Brou</h3>
              <div className={styles.account}>
                <Bank account="UYU - 001150264-00001" />
                <Bank account="USD - 001150264-00002" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.data}>
          <h2>
            Lista de regalos en <a>La Iberica</a>
          </h2>
          <div className={styles.imageContainer} onClick={redirectToStore}>
            <Image
              alt={"gifts"}
              src={"/main/gifts/laiberica3.jpeg"}
              width={isMobile ? 300 : 600}
              height={isMobile ? 131.5 : 263}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
