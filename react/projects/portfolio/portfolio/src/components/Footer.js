import React, { useEffect, useRef } from 'react'




const Footer =(props) =>{
    
    return(
        <div className='footer' ref={props.myRef}>
           <h1>Contact Me</h1>
           <h2>lynn.knapp.l8yy@gmail.com</h2>
           <h3>Looking for new exciting opportunites. Hire me!</h3>
           <i class="fab fa-linkedin-in fa-2x" aria-hidden='true'></i> 
           <i class="fab fa-github fa-2x" aria-hidden='true'></i> 
        </div>
    )
} 
export default Footer