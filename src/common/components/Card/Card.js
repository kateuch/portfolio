import style from './Card.module.scss';

const Card = (props) => {
    return (
    <section className={`${style.card} ${props.className ? props.className : ''}`}>
        {props.children}
    </section>
        )
};

export default Card;