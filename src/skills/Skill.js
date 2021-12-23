import style from './Skill.module.css';


const Skill = (props) => {
    return (
        <div className={style.item}>
            <div className={style.icon}></div>
            <div>
            <h2 className={style.title}>{props.title}</h2>
            </div>
        </div>
    )
}

export default Skill;