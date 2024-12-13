
import menuApp from '../../assets/menu-app.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className='flex flex-col text-center'>
      <h2 className="text-purple mb-4 tracking-widest">Portfolio</h2>
      <h3 className="uppercase mb-8 tracking-widest">Latest Projects</h3>
      <div className='flex justify-center gap-4'>
        <ProjectCard
          src={menuApp}
          link="https://github.com/rniradiel/menu-app"
          title="Bite and Bliss - Food Web App"
        />
      </div>
    </section>
  );
}

export default Projects;