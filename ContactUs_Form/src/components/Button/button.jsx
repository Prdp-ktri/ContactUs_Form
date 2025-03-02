import { MdMessage } from "react-icons/md";
import styles from "./button.module.css";
const Button = (props) => {
  return (
    <button className={styles.primary_btn}>
      {props.icon}
      {props.text}
    </button>
  );
};

export default Button;
