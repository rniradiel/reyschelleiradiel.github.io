import styles from './HeroStyles.module.css'
import heroImg from '../../assets/me.jpeg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Reyschelle Iradiel CV.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}> 
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Reyschelle Iradiel" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Reyschelle
                    <br />
                    Iradiel
                </h1>
                <h2>Frontend Developer</h2>
                <span>
                    <a href="https://github.com/rniradiel" target="_blank">
                        <img src={githubIcon} alt="Github Icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/reyschelleiradiel/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin Icon" />
                    </a>
                </span>
                <p className={styles.description}>
                With a passion for building modern web applications for commercial businesses using the latest frontend technologies.
                </p>
                <a href={CV} download>
                    <button className="hover">
                        Resume
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Hero