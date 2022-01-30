import {useState} from 'react';
import style from './BurgerMenu.module.scss';


export const Burger = () => {

    const [active, setActive] = useState(false);

    return (
        <>
        <div className={`${style.burger} ${active ? style.burgerActive : ''}`} onClick={() => setActive(!active)}>
            <div className={`${style.line} ${style.line1}`}></div>
            <div className={`${style.line} ${style.line2}`}></div>
            <div className={`${style.line} ${style.line3}`}></div>
        </div>
        </>
    )
}

