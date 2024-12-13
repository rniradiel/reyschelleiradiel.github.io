
// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, title }) {
  return (
    <a href={link} target="_blank" className="flex flex-col items-center">
      <img className="hover" src={src} alt={`${title} logo`} />
      <span className="mt-4">
        <p className="text-white">{title}</p>
      </span>
    </a>
  );
}

export default ProjectCard;