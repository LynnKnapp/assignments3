import React, { useRef } from 'react'
import './styles.css'
import Header from './Header.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Resume from './components/Resume.js'
import About from './components/About.js'
import Footer from './components/Footer.js'



const App =()=>{
    
    const scrollToRef = (myRef) => {
        myRef.current.scrollIntoView({ behavior: "smooth" })}
    
    const homeRef =useRef(null) 
    const aboutRef =useRef(null)
    const skillsRef =useRef(null)
    const projectsRef=useRef(null)
    const resumeRef=useRef(null) 
    
    return(
        <div className='app-container'>
            <Navbar 
                scrollToRef={scrollToRef} 
                homeRef={homeRef} 
                aboutRef={aboutRef}
                skillsRef={skillsRef}
                projectsRef={projectsRef}
                resumeRef={resumeRef}/>
            <Header/>
            <Home homeRef={homeRef}/>
            <About aboutRef={aboutRef}/>
            <Skills skillsRef={skillsRef}/>
            <Projects projectsRef={projectsRef}/>
            <Resume resumeRef={resumeRef}/>
            <Footer/>

        </div>
    )
}

export default App