
// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" className="flex flex-col items-center">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;