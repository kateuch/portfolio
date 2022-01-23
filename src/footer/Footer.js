import Card from "../common/components/Card/Card";
import style from "./Footer.module.scss";

const data = new Date;
const year = data.getFullYear();

const Footer = () => {
  return (
    <div className={style.footer}>
      <Card className={style.footerContainer}>
        <div className={style.copyright}>
          <p>© {year} by Ekaterina Uchaykina</p>
          </div>

      </Card>
    </div>
  );
};

export default Footer;
