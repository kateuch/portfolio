import Card from "../common/components/Card/Card";
import Title from "../common/components/Title/Title";
import style from "./Demo.module.scss";
import Project from "./Project";

const Demo = () => {
  return (
    <div className={style.demo}>
      <Card className={style.demoContainer}>
        <Title title={'Portfolio'}/>
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
