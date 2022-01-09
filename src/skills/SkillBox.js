import Skill from "./Skill";
import style from "./SkillBox.module.scss";
import Card from "../common/components/Card/Card";
import Title from "../common/components/Title/Title";

const SkillBox = () => {
  return (
    <div className={style.skillbox}>
      <Card className={style.skillboxContainer}>
          <Title title={'Skills'}/>
          <div className={style.list}>
          <Skill title={"JS"}/>
          <Skill title={"CSS"}/>
          <Skill title={"HTML"}/>
          </div>
      </Card>
    </div>
  );
};

export default SkillBox;