import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
function Header({ bgColor }) {
    return (
      <nav className={`fixed top-0 left-0 right-0 text-white w-full z-[99] ${bgColor}`}>
        <ul className="flex justify-end gap-8 p-8 mr-4">
            <li className='hover:text-light-blue'>
                <Link to="hero" smooth={true} duration={500}>
                    Home
                </Link>
            </li>
            <li className='hover:text-light-blue'>
                <Link to="about" smooth={true} duration={500}>
                    About
                </Link>
            </li>
            <li className='hover:text-light-blue'>
                <Link to="skills" smooth={true} duration={500}>
                    Skills
                </Link>
            </li>
            <li className='hover:text-light-blue'>
                <Link to="projects" smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='hover:text-light-blue'>
                <Link to="contact" smooth={true} duration={500}>
                    Contact
                </Link>
            </li>
        </ul>
      </nav>
    );
  }
  
  export default Header;