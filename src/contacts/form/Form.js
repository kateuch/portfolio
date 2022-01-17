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
      </ul>
</div>
      <div className={styles.message}>
        <textarea id="message" placeholder="Message" />
      </div>
      <div>
        <button className={styles.btn}>Send</button>
      </div>
    </form>
  );
};

export default Form;
