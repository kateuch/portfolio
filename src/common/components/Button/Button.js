import style from "./Button.module.scss";

const Button = (props) => {
  return (
    <>

        <div className={`${style.button} ${style.btn}`} >
          <span>{props.children}</span>
        </div>



    </>
  );
};

export { Button };
