
// eslint-disable-next-line react/prop-types
function SkillList({ src, skill }) {
  return (
    <span className="flex items-center gap-5 w-40">
        <img className="w-5" src={src} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList