import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ContactForm}>
        <button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <button text="VIA CALL" icon={<MdMessage fontSize="24px" />} />
      </div>
      <div className={styles.contactImage}></div>
    </section>
  );
};

export default ContactForm;
