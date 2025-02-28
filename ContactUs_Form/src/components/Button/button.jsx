import { MdMessage } from "react-icons/md";
import styles from "./button.module.css";

const button = () => {
  return (
    <button className={styles.primary_btn}>
      <MdMessage />
      VIA SUPPORT CHAT
    </button>
  );
};

export default button;
