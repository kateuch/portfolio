import Card from "../common/components/Card/Card";
import Title from "../common/components/Title/Title";
import style from "./Demo.module.scss";
import Project from "./Project";
import img1 from "../assets/image/img-3.jpg";
import img2 from "../assets/image/img-2.jpg";
import img3 from "../assets/image/img-33.jpg";
import img4 from "../assets/image/img-44.jpg";
import img5 from "../assets/image/img-55.jpg";
import img6 from "../assets/image/img-66.jpg";
import img7 from "../assets/image/img-77.jpg";
import img8 from "../assets/image/img-88.jpg";
import img9 from "../assets/image/img-99.jpg";

const Demo = () => {
  return (
    <div className={style.demo} id={'portfolio'}>
      <Card className={style.demoContainer}>
        <Title title={"Portfolio"} />
        <ul className={style.list}>
          <li>
            <Project title={"1"} description={"description"} image={img1}/>
          </li>
          <li>
            <Project title={"25555555555"} description={"description"} image={img4}/>
          </li>
          <li>
            <Project title={"3"} description={"description"} image={img7}/>
          </li>
          <li>
            <Project title={"4"} description={"description"} image={img5}/>
          </li>
          <li>
            <Project title={"5"} description={"description"} image={img9}/>
          </li>
          <li>
            <Project title={"6"} description={"description"} image={img2}/>
          </li>
          <li>
            <Project title={"7"} description={"description"} image={img3}/>
          </li>
          <li>
            <Project title={"8"} description={"description"} image={img8}/>
          </li>
        </ul>
      </Card>
    </div>
  );
};

export default Demo;
