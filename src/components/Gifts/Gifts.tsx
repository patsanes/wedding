import { FC } from "react";
import styles from "./Gifts.module.scss";

type BankProps = {
  bank: string;
  account: string;
  branch?: string;
};

const Bank: FC<BankProps> = ({ bank, account, branch }) => {
  return (
    <div className={styles.bankAccountContainer}>
      <span className={styles.header}>{bank}</span>
      {branch && <span>{branch}</span>}
      <span>{account}</span>
    </div>
  );
};

export const Gifts = () => {
  return (
    <div id="gifts" className={styles.container}>
      <h4 style={{ textAlign: "center" }}>WIP</h4>
      <h1>Lista de regalos</h1>

      <div className={styles.content}>
        <div>
          <h2>Cuentas bancarias</h2>
          <div className={styles.banks}>
            <Bank
              bank="Santander"
              account="USD - 5202838326"
              branch="Sucursal: 02"
            />
            <Bank
              bank="Santander"
              account="UYU - 1202682339"
              branch="Sucursal: 02"
            />
            <Bank bank="BROU" account="UYU - 001150264-00001" />
            <Bank bank="BROU" account="USD - 001150264-00002" />
          </div>
        </div>
        {/* TODO: fill this shit */}
        {/* <div>
          <h2>
            Lista de regalos en <a>La Iberica</a>
          </h2>
        </div>
        <div>
          <h2>
            Lista de regalos en <a>Masinfinito</a>
          </h2>
        </div> */}
      </div>
    </div>
  );
};
