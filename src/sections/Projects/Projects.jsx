import styles from './ProjectsStyles.module.css';
import menuApp from '../../assets/menu-app.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h2 className="text-purple mb-4 tracking-widest">Portfolio</h2>
      <h3 className="font-bold uppercase mb-8">Latest Projects</h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={menuApp}
          link="https://github.com/rniradiel/menu-app"
          h3="Menu App"
          p="created using ReactJS and TailwindCSS"
        />
      </div>
    </section>
  );
}

export default Projects;