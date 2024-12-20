import htmlIcon from '../../assets/html.svg';
import cssIcon from '../../assets/css.svg';
import javascriptIcon from '../../assets/javascript.svg';
import jqueryIcon from '../../assets/jquery.svg';
import reactIcon from '../../assets/react.svg';
import vueIcon from '../../assets/vuejs.svg';
import tailwindIcon from '../../assets/tailwind-css.svg';
import bootstrapIcon from '../../assets/bootstrap.svg';
import gitIcon from '../../assets/git.svg';
import graphqlIcon from '../../assets/graphql.svg';
import dockerIcon from '../../assets/docker.svg';
import vscodeIcon from '../../assets/icons8-visual-studio.svg';
import SkillList from '../../common/SkillList';

function Skills() {

  return (
    <section id="skills" className='flex flex-col text-center'>
      <h2 className="text-purple mb-4 tracking-widest">What I Do</h2>
      <h3 className="uppercase mb-8 tracking-widest">Specializing In</h3>
      <div className='flex flex-wrap justify-center w-4/6 mx-auto gap-4'>
          <SkillList src={htmlIcon} skill="HTML" />
          <SkillList src={cssIcon} skill="CSS" />
          <SkillList src={javascriptIcon} skill="JavaScript" />
          <SkillList src={jqueryIcon} skill="Jquery" />
          <SkillList src={reactIcon} skill="React" />
          <SkillList src={vueIcon} skill="Vue" />
          <SkillList src={tailwindIcon} skill="Tailwind CSS" />
          <SkillList src={bootstrapIcon} skill="Bootstrap" />
          <SkillList src={gitIcon} skill="Git" />
          <SkillList src={graphqlIcon} skill="Graphql" />
          <SkillList src={dockerIcon} skill="Docker" />
          <SkillList src={vscodeIcon} skill="VS Code" />
      </div>
    </section>
  );
}

export default Skills;