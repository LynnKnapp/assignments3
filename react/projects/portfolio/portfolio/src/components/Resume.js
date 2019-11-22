import React from 'react'

const Resume =(props)=>{
    return(
        <div ref = {props.resumeRef} className= 'resume'>
            <h1>Resume</h1>
            <div className = 'image'>
                <a href=''><h2 className= 'download' style ={{color: "rgb(4, 39, 49)" 
                }}>click to download</h2></a>
            </div>
        </div>
    )
}
export default Resume