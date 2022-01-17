import style from "./Home.module.scss";
import Card from "../common/components/Card/Card";
import image from '../assets/image/IMG_20211224_180511.jpg';
import facebook from '../assets/image/fb.svg';
import link from '../assets/image/linkedin.svg';
import flickr from '../assets/image/flickr.svg';

const Home = () => {
  return (
    <div className={style.home}>
      <Card className={style.homeContainer}>
        <div className={style.greatings}>
          <h3>EKATERINA UCHAYKINA </h3>
          <p>Frontend-developer based in Moscow</p>
          <div>
          <ul className={style.social}>
            <li>
              <a
                href="https://www.facebook.com/"
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
