import React, { useEffect, useRef } from 'react'




const Footer =(props) =>{
    
    return(
        <div className='footer' ref={props.myRef}>
           <h1>Contact Me</h1>
           <h2>lynn.knapp.l8yy@gmail.com</h2>
           <h3>Looking for new exciting opportunites. Hire me!</h3>
           <div className ='icon'>
            <a href ='www.linkedin.com/in/lynn-knapp-lebarreEdit your custom URL
            '><i class="fab fa-linkedin fa-4x" aria-hidden='true'></i></a> 
            <a href ='https://github.com/LynnKnapp'><i class="fab fa-github fa-4x" aria-hidden='true'></i></a> 
           </div>
        </div>
    )
} 
export default Footer