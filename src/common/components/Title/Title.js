import style from './Title.module.scss';


const Title = (props) => {
    return (
        <div className={style.title}>
              <h3>{props.title}</h3>
          </div>
    )
}

export default Title