import Card from "../common/Card";
import style from "./Demo.module.scss";
import Project from "./Project";

const Demo = () => {
  return (
    <div className={style.demo}>
      <Card className={style.demoContainer}>
      <div className={style.title}>
              <h3>Portfolio</h3>
          </div>
          <div className={style.list}>
          <Project title={'title'} description={'description'}/>
          <Project  title={'title'} description={'description'}/>
          <Project  title={'title'} description={'description'}/>
          <Project  title={'title'} description={'description'}/>
          <Project  title={'title'} description={'description'}/>
          </div>
      </Card>
    </div>
  );
};

export default Demo;
