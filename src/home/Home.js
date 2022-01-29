import style from "./Home.module.scss";
import Card from "../common/components/Card/Card";
import image from '../assets/image/photo-min.jpg';
import facebook from '../assets/image/fb.svg';
import link from '../assets/image/linkedin.svg';
import flickr from '../assets/image/flickr.svg';
import tg from '../assets/image/tg.svg';

const Home = () => {
  return (
    <div className={style.home} id={'home'}>
      <Card className={style.homeContainer}>
        <div className={style.greatings}>
          <h3>EKATERiNA UCHAYKiNA </h3>
          <p>Frontend-developer based in Moscow</p>
          <div className={style.contactsBlock}>

          <ul className={style.social}>
            <li>
              <a
                href="https://www.facebook.com/cate.uch.3"
                target="_blank"
                rel="noreferrer"
              >
                <img className={style.svg} src={facebook} alt="social"/>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                <img
                  className={style.svg}
                  src={link}
                  alt="social"
                />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/nopasaran111"
                target="_blank"
                rel="noreferrer"
              >
                <img className={style.svg} src={tg} alt="social"/>
              </a>
            </li>
            <li>
              <a
                href="https://www.flickr.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={style.svg}
                  src={flickr}
                  alt="social"
                />
              </a>
            </li>

          </ul>

          <ul className={style.contacts}>
            <li>
            <p>
              <span>Email:</span>
              katebox@mail.com
            </p>
            </li>
            <li>
            <p>
              <span>Phone:</span>
              +7 926-810-93-93
            </p>
            </li>
            <li>
            <p>
              <span>Freelance:</span>
              Avalibale
            </p>
            </li>

            </ul>

          </div>
        </div>
        {/* <div className={style.icon} style={{backgroundImage: `url(${image})`}}> */}
        <div className={style.icon} >
          <img src={image} alt="me" />
        </div>
      </Card>
    </div>
  );
};

export default Home;
