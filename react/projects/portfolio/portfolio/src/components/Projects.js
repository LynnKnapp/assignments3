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
                        <h5> This quiz was built using react.js.  I used a seinfeld API and an Axios get request to receive the questions for the quiz.  I also used react-context to recieve props from sibling components.
                        </h5>
                        <h4>Technologies Used</h4>
                        <div className='ind-project-cont'>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>ES6</li>
                                <li>Axios</li>
                                <li>JSON</li>
                                <li>Git</li>
                                <li>React Context</li>
                                <li>React Router</li>
                                <li>Node</li>
                                <li>CSS Responsive Design</li>
                            </ul>
                        </div>
                        <a href='http://seinfeldquiz2.surge.sh/'>Link to view project</a>
                </div>
                <div className='budget'>
                        <h3>Monthly Budget App</h3>
                        <h5>This is a full stack group pet adoption app.  I built the front end using React.js, an axios get request to receive data from MongoDB. The user has a choice to search between cats and dogs then click on the adopt link to fill out a form.  There is also a search function to search by breed.  Along with the front end, I also built the server along with the dog model and route. I styled using CSS. 
                        </h5>
                        <h4>Technologies Used</h4>
                        <div className='ind-project-cont'>
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>ES6</li>
                                <li>JSON</li>
                                <li>Git</li>
                                <li>React Hooks</li>
                                <li>Node</li>
                                <li>CSS Responsive Design</li>
                            </ul>
                        </div>
                        <a href='http://monthlybudget14.surge.sh/'>Link to view project</a>
                </div>
                <div className='pets'>
                    <h3>Pet Adoption Fullstack Group App</h3>
                        <h5>This is a front end budget app I built using react.js. I also used react hooks which makes for much cleaner and leaner code, along with JSON and incorporated react icons to the styling.   
                        </h5>
                        <h4>Technologies I Used</h4>
                        <div className='ind-project-cont'>
                            <ul>
                                <li>React </li>
                                <li>Javascript</li>
                                <li>ES6</li>
                                <li>Axios</li>
                                <li>JSON</li>
                                <li>Git</li>
                                <li>React Router</li>
                                <li>Mongoose</li>
                                <li>Express</li>
                                <li>Node</li>
                                <li>MongodDB and MLab</li>
                                <li>CSS Responsive Design</li>
                            </ul>
                        </div>
                        <a href='https://pawesome-pets1.herokuapp.com/'>Link to view project</a>
    
                </div>
                {/* <a href='https://recipe-app14.herokuapp.com/'>Recipe App</a> */}
            </div>    
        </div>
    )
}
export default Projects