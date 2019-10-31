import React from 'react'
import seinfeldImg from '../assets/SeinImg.png'


const Projects =(props)=>{
    return(
        <div className='projects-container'ref={props.projectsRef}>
            <h1>Projects</h1>
            <img src={seinfeldImg} style={{
                height: 150,
                width: 150
            }}alt='seinfeld' />
        </div>
    )
}
export default Projects