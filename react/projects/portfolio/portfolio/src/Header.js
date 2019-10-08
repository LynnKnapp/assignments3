import React from 'react'
import './styles.css'

const Header = () => {
    return ( 
        <div className = 'header'
        style = {
            {   margin: '0px',
                height: '450px',
                backgroundSize: '100%',
                backgroundPosition: 'center',
                backgroundImage: 'url(/AdobeStock_127272662.jpeg)'
            }} >
        <h1> Lynn Knapp </h1> 
        <h2>Full Stack Developer</h2>
        </div>
    )
}
export default Header