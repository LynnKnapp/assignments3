import React from 'react'
import Home from './Home'
import  CharacterFacts from './CharacterFacts.js'
import FavoriteClips from './FavoriteClips.js'
import {Link} from 'react-router-dom'

const Navbar =()=>{
    return(
      <div className = 'navbar'>
        <Link to ="/">Home</Link>
        <Link to = "/characterfacts">Character Facts</Link>
        <Link to ="/favoriteClips">Favorite Clips</Link>      
      </div>
    )
}
export default Navbar