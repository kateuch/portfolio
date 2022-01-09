import style from "./Project.module.scss";

const Project = (props) => {
  return(
  <div className={style.project}>
    <div className={style.icon}></div>
    <div className={style.title}>
      <h3 >
        <a href=''>{props.title}</a>
        </h3>
      <span className={style.description}>{props.description}</span>
    </div>
  </div>
  )
};

export default Project;
