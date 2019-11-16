import React from 'react'
import {withChar} from './ContextCharacters'


 const Characters =(props)=>{

    const getImage = () => {
        for(let i =0; i <props.characters.length; i++){
           if(props.userSelection === props.characters[i].name)    
        return  props.characters[i].img
        }
    }
    console.log("Characters Props",props)
    return(
        <div className = 'characters-container'>
            {
                (props.answerChoice === true && props.hasAnswered === true)
                // (props.userSelection === props.author) 
                ? 
                <div className= 'author'> 
                    <h2>{props.author}</h2>
                    <img className = 'image'src=
                        {getImage()}
                        alt='correct'/>  
                </div>
            :
            <div className= 'wrong-answer'>
                <h1>Your wrong, try again.</h1>     
            </div>
            }
        </div>
    )
}
    
    export default withChar(Characters)
  
  