import React from 'react'
import seinfeldImg from '../assets/SeinImg.png'
import pawesome from '../assets/Pawesome.png'


const Projects =(props)=>{
    return(
        <div className= 'projects-container'ref={props.projectsRef}>
            <h1>Project Links</h1>
            <div className='img-container'>
                <div className='seinfeld'>
                        <h3>Seinfeld API Quiz</h3>
                        <h4>Technologies Used</h4>
                        <p>React</p>
                        <p>Javascript</p>
                        <p>ES6</p>
                        <p>Axios</p>
                        <p>JSON</p>
                        <p>Git</p>
                        <p>React Context</p>
                        <p>React Router</p>
                        <p>Node</p>
                        <p>CSS Responsive Design</p>
                        <br/>
                        <a href='http://seinfeldquiz2.surge.sh/'>Link</a>
                </div>
                <div className='budget'>
                        <h3>Monthly Budget App</h3>
                        <h4>Technologies Used</h4>
                        <p>React</p>
                        <p>Javascript</p>
                        <p>ES6</p>
                        <p>JSON</p>
                        <p>Git</p>
                        <p>React Hooks</p>
                        <p>Node</p>
                        <p>CSS Responsive Design</p>
                        <br/>
                        <a href='http://monthlybudget14.surge.sh/'>Link</a>
                </div>
                <div className='pets'>
                    <h3>Pet Adoption Fullstack Group App</h3>
                        <h4>Technologies I Used</h4>
                        <p>React </p>
                        <p>Javascript</p>
                        <p>ES6</p>
                        <p>Axios</p>
                        <p>JSON</p>
                        <p>Git</p>
                        <p>React Router</p>
                        <p>Mongoose</p>
                        <p>Express</p>
                        <p>Node</p>
                        <p>MongodDB and MLab</p>
                        <p>CSS Responsive Design</p>
                        <a href='https://pawesome-pets1.herokuapp.com/'>Link</a>
    
                </div>
                {/* <a href='https://recipe-app14.herokuapp.com/'>Recipe App</a> */}
            </div>    
        </div>
    )
}
export default Projects