import React from 'react'

const About =(props)=>{
    return(
        <div className='about-container'>
            <h1>About Me</h1>
            <div className='about' ref={props.aboutRef}>
                <div className ='intro'>
                    <h2>"Intuitive design happens when current knowledge is the same as target knowledge."
                    </h2>
                </div>
                <div className='par-1'>
                    <h3>I am a full-stack developer based in Salt Lake City, UT. I love creating unique designs with an edge and enjoy building apps that are practical, enjoyable and user friendly.
                    </h3>
                </div>
                <div className='par-2'>
                    <h3>As a developer, I am consistently learning new languages and skills through online courses, training, books and meet ups.
                    </h3>
                </div>
                  
            </div>
        </div>
    )
}
export default About