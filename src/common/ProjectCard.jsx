
// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, title }) {
  return (
     <div className="flex flex-col items-center w-fit bg-blue rounded">
      <img className="max-w-60 rounded-t" src={src} alt={`${title} logo`} />
      <span className="text-left p-4">
        <p className="text-white mb-4">{title}</p>
        <a href={link} target="_blank">
          <button>
            View Demo
          </button>
        </a>
      </span>
    </div>
  );
}

export default ProjectCard;