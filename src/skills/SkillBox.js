import Card from "../common/Card";
import Skill from "./Skill";
import style from "./SkillBox.module.css";

const SkillBox = () => {
  return (
    <div className={style.skillbox}>
      <Card className={style.skillboxContainer}>
          <div className={style.title}>
              <h3>Skills</h3>
          </div>
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