import {useState, useEffect, useCallback} from 'react';
import styles from "./Form.module.scss";
import emailjs from 'emailjs-com';

const Form = () => {

  const [message, setMessage] = useState(null);


const reset = () => {
  setMessage(null)
}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('/service_gepsdmu', 'template_q7rr0cc', e.currentTarget, 'user_92ZidQ3LvL0Ct8GnQUBOq')
      .then((result) => {
          console.log(result.text);
          setMessage('Successfuly sent');
          setTimeout(reset, 3000)
      }, (error) => {
          console.log(error.text);
          setMessage('Failed!');
          setTimeout(reset, 3000)
      });
      e.currentTarget.reset();
  };

  return (
    <form className={styles.form} onSubmit={sendEmail} data-aos='fade-left'>
        <div className={styles.inputBlock} >
      <ul >
        <li>
          <input type="text" id="name" placeholder="Name" name='from_name' required/>
        </li>
        <li>
          <input type="text" id="email" placeholder="Email" name='email' required/>
        </li>
        <li >
        <textarea name="subject" placeholder="Message" name='message' required/>
      </li>
      </ul>
</div>
      <div className={styles.button} >


       {!message ? <button type={'submit'} className={styles.ibButton} >Send Message</button> : <p className={styles.text}>{message}</p> }


      </div>
    </form>
  );
};

export default Form;
