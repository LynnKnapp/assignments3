import React from 'react'
import seinfeldImg from '../assets/SeinImg.png'
import pawesome from '../assets/Pawesome.png'


const Projects =(props)=>{
    return(
        <div className= 'projects-container'ref={props.projectsRef}>
            <h1>Projects</h1>
            <div className='img-container'>
                <a href='http://serenitynow.surge.sh/'><img classname ='img'src = {seinfeldImg} alt='seinfeld' /></a>
                <a href='https://pawesompets.herokuapp.com/'><img className ='img'src = {pawesome} alt='pawesome' /></a>
            </div>    
        </div>
    )
}
export default Projects