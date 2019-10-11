import React from 'react'

const Skills =(props)=>{
    return(
        <div className= 'skills-container' ref={props.skillsRef}>
            <h1>Skills</h1>
                <ul className='list'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>Mongo.DB</li>
                <li>ES6</li>
                <li>AJAX/HTTP</li> 
                <li>JSON</li>
                <li>Git</li> 
                </ul>
            </div>    
    )
}
export default Skills