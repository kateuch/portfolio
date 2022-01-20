import styles from "./Form.module.scss";

const Form = () => {
  return (
    <form className={styles.form}>
        <div className={styles.inputBlock}>
      <ul >
        <li>
          <input type="text" id="name" placeholder="Name" />
        </li>
        <li>
          <input type="text" id="email" placeholder="Email" />
        </li>
        <li >
        <textarea name="subject" placeholder="Message" />
      </li>
      </ul>
</div>

      <div className={styles.button}>
        <button className={styles.ibButton}>Send Message</button>
      </div>
    </form>
  );
};

export default Form;
