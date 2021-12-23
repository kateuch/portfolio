import style from "./Project.module.scss";

const Project = (props) => {
  return(
  <div className={style.project}>
    <div className={style.icon}></div>
    <div>
      <h2 className={style.title}>{props.title}</h2>
      <h2 className={style.description}>{props.description}</h2>
    </div>
  </div>
  )
};

export default Project;
