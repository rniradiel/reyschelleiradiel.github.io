import { useState } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "../../common/ThemeToggle";

// eslint-disable-next-line react/prop-types
function Header({ bgColor }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 text-white w-full z-[99] ${bgColor}`}>
            <div className="flex md:hidden justify-end items-center p-4">
                <button 
                    className="md:hidden focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <svg className="fill-white h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
                    </svg>
                </button>
            </div>
            <ul className={`flex-col md:flex md:flex-row md:justify-end gap-8 p-8 md:mr-4 ${isOpen ? 'flex' : 'hidden'}`}>
                <li className='hover:text-light-blue'>
                    <Link to="hero" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-light-blue'>
                    <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        About
                    </Link>
                </li>
                <li className='hover:text-light-blue'>
                    <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-light-blue'>
                    <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-light-blue'>
                    <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </li>
                <li>
                    <ThemeToggle />
                </li>
            </ul>
        </nav>
    );
}

export default Header;