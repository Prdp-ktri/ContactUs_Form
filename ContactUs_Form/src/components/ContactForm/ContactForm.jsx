import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.ContactForm}>
        <button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
      </div>
      <div className={styles.contactImage}></div>
    </section>
  );
};

export default ContactForm;
