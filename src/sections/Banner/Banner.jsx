
import githubLight from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-dark.svg'

function Banner() {

    return (
        <section id="hero" className='bg-banner-pattern h-screen bg-no-repeat w-full bg-cover'> 
            <div className='flex items-center flex-col h-full justify-center'>
                <h1 className='text-white text-1xl md:text-3xl mb-6'>
                    I'm Reyschelle Iradiel
                </h1>
                <h2 className='text-white text-xl md:text-2xl mb-6'>Front End Development</h2>
                <span className='flex items-center gap-4'>
                    <a href="https://github.com/rniradiel" target="_blank">
                        <img src={githubLight} alt="Github Icon" className='size-16' />
                    </a>
                    <a href="https://www.linkedin.com/in/reyschelleiradiel/" target="_blank">
                        <img src={linkedinLight} alt="Linkedin Icon" />
                    </a>
                </span>
            </div>
        </section>
    )
}

export default Banner