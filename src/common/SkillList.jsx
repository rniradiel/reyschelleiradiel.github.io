
// eslint-disable-next-line react/prop-types
function SkillList({ src, skill }) {
  return (
    <span className="card flex items-center flex-col p-4 gap-5 w-28 md:w-40">
        <img className="w-10" src={src} alt={skill} />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList