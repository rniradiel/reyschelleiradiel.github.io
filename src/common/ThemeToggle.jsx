import { useTheme } from './ThemeContext';
import sunIcon from '../assets/sun.svg';
import moonIcon from '../assets/moon.svg';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="modeToggle"
    >
      {isDarkMode ? 
        <img src={sunIcon} alt="lightMode" className='size-7'/> : 
        <img src={moonIcon} alt="darkMode" className='size-6'/> 
      }
    </button>
  );
};

export default ThemeToggle;