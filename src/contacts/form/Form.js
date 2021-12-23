import styles from "./Form.module.css";
import Card from "../../common/Card";

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
      <div>
        <textarea id="message" placeholder="Message" />
      </div>
      <div>
        <button className={styles.btn}>Send</button>
      </div>
    </form>
  );
};

export default Form;
