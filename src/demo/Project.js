import style from "./Project.module.scss";


const Project = (props) => {
  return (
    <div className={style.project} data-aos="fade-right" data-aos-delay='550'>
      <div className={style.img} style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className={style.overlay}>
          <div className={style.title}>
            <h3>
              <a href="">{props.title}</a>
            </h3>
            <span className={style.description}>{props.description}</span>

        </div>
      </div>
    </div>
  );
};

export default Project;
