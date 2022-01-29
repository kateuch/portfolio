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

          <div className={style.list} data-aos='fade-up' data-aos-delay='900' >
            {skills.map((item, index) =>
              <div key={index}>
                <Skill title={item}/>
              </div>
            )}
           </div>
      </Card>
    </div>
  );
};

export default SkillBox;