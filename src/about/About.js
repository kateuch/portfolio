import Card from "../common/Card";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.about}>
      <Card className={style.aboutContainer}>
        <div className={style.iconBlock}></div>
        <div className={style.description}>
          <div className={style.text}>
            <p>
              Hello, I am a creative photographer based in New York and happy to
              travel all over Europe to capture your big day in candid and
              authentic photos. I will create a lasting memory of the people.
            </p>
          </div>
          <div className={style.personalData}>
            <ul>
              <li>
                <p>
                  <span>Birthday:</span>
                </p>
              </li>
              <li>
                <p>
                  <span>Age:</span>01.07.1990
                </p>
              </li>
              <li>
                <p>
                  <span>Address:</span>31
                </p>
              </li>
              <li>
                <p>
                  <span>Email:</span>mail@mail.com
                </p>
              </li>
              <li>
                <p>
                  <span>Phone:</span>+7 910 466 88 08
                </p>
              </li>
              <li>
                <p>
                  <span>Study:</span>Univercity of Texas
                </p>
              </li>
              <li>
                <p>
                  <span>Freelance:</span>Available
                </p>
              </li>
            </ul>
          </div>
          </div>
      </Card>
    </div>
  );
};

export default About;
