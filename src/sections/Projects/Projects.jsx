import styles from './ProjectsStyles.module.css';
import menuApp from '../../assets/menu-app.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
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