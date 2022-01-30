import style from './ModalWindow.module.scss';
import {Link} from "react-scroll";

export const ModalWindow = () => {

    const links = ['home', 'skills', 'portfolio', 'contacts'];
    return (
        <>
        <div className={style.window}>
            <h3 className={style.title}>menu</h3>
            <ul className={style.links}>
                {links.map((item, index)=> {
                    <li key={index} className={style.link}>
                        <Link
                        activeClass={style.active}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>
                        {item}
                        </Link>
                    </li>
                })}
            </ul>
        </div>

        </>
    )
}