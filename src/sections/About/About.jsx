
import heroImg from '../../assets/me.jpeg'
import CV from '../../assets/Reyschelle Iradiel CV.pdf'

function About() {
    return (
        <section id="about" className='flex mx-auto w-9/12 grid grid-cols-2 gap-5'> 
            <div className="img-frame">
                <img className='' src={heroImg} alt="Profile picture of Reyschelle Iradiel" />
            </div>
            <div className='flex text-left flex-col gap-4'>
                <h2 className='text-purple tracking-widest'>About Me</h2>
                <h3> I'm Reyschelle Iradiel </h3>
                <p className='text-gray'>
                    With a passion for building modern web applications for commercial businesses using the latest frontend technologies.
                </p>
                <a href={CV} download>
                    <button>
                        Download CV
                    </button>
                </a>
            </div>
        </section>
    )
}

export default About