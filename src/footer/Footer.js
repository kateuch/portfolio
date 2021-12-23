import Card from "../common/Card";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <Card className={style.footerContainer}>
        <div className={style.copyright}>© 2021 by Ekaterina Uchaykina</div>
        <div>
        <ul className={style.listOfLinks}>
          <li className={style.link}>
            <div className={style.icon}></div>
          </li>
          <li className={style.link}>
            <div className={style.icon}></div>
          </li>
          <li className={style.link}>
            <div className={style.icon}></div>
          </li>
        </ul>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
