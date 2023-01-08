import { Timer } from "../Timer/Timer";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <Timer />
      </div>
    </>
  );
};
