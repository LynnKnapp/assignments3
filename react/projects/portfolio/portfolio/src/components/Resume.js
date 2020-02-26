import React from 'react'
import pdf from '../pdf/Resume.pdf'

const Resume =(props)=>{
    return(
        <div ref = {props.resumeRef} className= 'resume'>
            <h1>Resume</h1>
            <div className = 'image'>
                <a href={pdf} target = "_blank" className= 'download'>Download PDF</a>
            </div>
        </div>
    )
}
export default Resume