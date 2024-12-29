
// eslint-disable-next-line react/prop-types
function ProjectCard({ src, link, title }) {
  return (
     <div className="flex flex-col items-center w-fit bg-blue rounded">
      <img className="w-full h-60 object-cover rounded-t" src={src} alt={`${title} logo`} />
      <span className="p-4">
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