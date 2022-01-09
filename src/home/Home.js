import style from "./Home.module.scss";
import Card from "../common/components/Card/Card";


const Home = () => {
  return (
    <div className={style.home}>
      <Card className={style.homeContainer}>
        <div className={style.greatings}>
          <h3>EKATERINA UCHAYKINA </h3>
          <p>Frontend-developer based in Moscow</p>
          <ul className={style.social}>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="svg"
                  src="/assets/img/svg/social/facebook.svg"
                  alt="social"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <img
                  class="svg"
                  src="/assets/img/svg/social/twitter.svg"
                  alt="social"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="svg"
                  src="/assets/img/svg/social/instagram.svg"
                  alt="social"
                />
              </a>
            </li>
            <li>
              <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
                <img
                  class="svg"
                  src="/assets/img/svg/social/dribbble.svg"
                  alt="social"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="svg"
                  src="/assets/img/svg/social/tik-tok.svg"
                  alt="social"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={style.icon}></div>
      </Card>
    </div>
  );
};

export default Home;
