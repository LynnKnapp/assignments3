import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home.js'
import Skills from './Skills.js'
import Projects from './Projects.js'
import Resume from './Resume.js'
import About from './About.js'


const Navbar =(props)=>{
    return( 
        <div className = 'navbar'>
            <a onClick={() => props.scrollToRef(props.homeRef)}>Home</a>
            <a onClick={() => props.scrollToRef(props.aboutRef)}>About Me</a>
            <a onClick={() => props.scrollToRef(props.skillsRef)}>Skills</a>     
            <a onClick={() => props.scrollToRef(props.projectsRef)}>Projects</a>
            <a onClick={() => props.scrollToRef(props.resumeRef)}>Resume</a>
        </div>
    )
}
export default Navbar