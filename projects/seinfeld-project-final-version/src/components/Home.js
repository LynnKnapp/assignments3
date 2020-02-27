import React from 'react'
import Logo from './assets/logo.png'

const Home =(props)=>{
    return(
        
        <div className ='home'>
        <img alt = "logo" className = 'logo-image' src={Logo} />
            <h1>Helloooo, Welcome to the Quiz About Nothing</h1>
        </div>
    )
}
export default Home