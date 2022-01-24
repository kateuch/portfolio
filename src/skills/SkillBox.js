import Skill from "./Skill";
import style from "./SkillBox.module.scss";
import Card from "../common/components/Card/Card";
import Title from "../common/components/Title/Title";

const SkillBox = () => {

  const skills = ['Javascript', 'CSS', 'Typescript',
  'Storybook', 'Jest', 'Material-UI',
  'Sass/Scss', 'React', 'Redux', 'Next.js', 'MongoDB' ]
  return (
    <div className={style.skillbox} id={'skills'} >
      <Card className={style.skillboxContainer}  >
       <Title title={'Skills'} />

          <div className={style.list} data-aos='fade-up'>
            {skills.map((item, index) =>
              <div key={index}>
                <Skill title={item}/>
              </div>
            )}
          {/* <Skill title={'Javascript'}/>
          <Skill title={"CSS"}/>
          <Skill title={"Typescript"}/>
          <Skill title={"Storybook"}/>
          <Skill title={"Jest"}/>
          <Skill title={"Material-UI"}/>
          <Skill title={"Sass/Scss"}/>
          <Skill title={"React"}/>
          <Skill title={"Redux"}/>
          <Skill title={"Next.js"}/>
          <Skill title={"MongoDB"}/> */}
          </div>
      </Card>
    </div>
  );
};

export default SkillBox;