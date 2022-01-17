import style from "./About.module.scss";
import Card from "../common/components/Card/Card";
import image from '../assets/image/IMG_20211224_180511.jpg';

const About = () => {
  return (
    <div className={style.about}>
      <Card className={style.aboutContainer}>
        <div className={style.iconBlock}>
        <img src={image} alt="me" />
        </div>
        <div className={style.description}>
          <div className={style.title} >
            <span>About me</span>
            <h3>Creative Software Engineer based in New York, USA</h3>
          </div>
          <div className={style.text}>
            <p>
              Hello, I am a creative photographer based in New York and happy to
              travel all over Europe to capture your big day in candid and
              authentic photos. I will create a lasting memory of the people.
            </p>
          </div>
          </div>
      </Card>
    </div>
  );
};

export default About;
