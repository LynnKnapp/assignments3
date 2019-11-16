import React from 'react'
import {withChar} from './ContextCharacters'

const CharacterFacts =(props)=>{
    console.log("CharacterFacts Props",props);
    const mappedImgs = props.characters.map(char=>{
        return(
            <div className= 'character-facts'>
                <h2>{char.name}</h2>
                <img src ={char.img} alt='facts'/>
                <p>{char.facts}</p>  
            </div>
        )
    })
    return(
        <div className= 'character-heading'>      
            <h1>Meet Our Favorite Seinies</h1>
            {mappedImgs}
        </div>
    )
}
export default withChar(CharacterFacts)