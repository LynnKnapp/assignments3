import React from 'react'
import seinfeldImg from '../assets/SeinImg.png'
import pawesome from '../assets/Pawesome.png'


const Projects =(props)=>{
    return(
        <div className= 'projects-container'ref={props.projectsRef}>
            <h1>Projects</h1>
            <div className='img-container'>
                <a href='http://serenitynow.surge.sh/'>Seinfeld API Quiz</a>
                <a href='https://pawesome-pets1.herokuapp.com/'>Pet Adoption Fullstack App</a>
                {/* <a href='https://recipe-app14.herokuapp.com/'>Recipe App</a> */}
            </div>    
        </div>
    )
}
export default Projects