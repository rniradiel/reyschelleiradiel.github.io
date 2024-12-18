import './App.css'
import Header from './sections/Header/Header'
import Hero from './sections/Hero/Hero'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'
import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [bgColor, setBgcolor] = useState('bg-transparent');

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setBgcolor('bg-blue')
    } else {
      setBgcolor('bg-transparent')
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header bgColor={bgColor} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>  
  )
}

export default App
