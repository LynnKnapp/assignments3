import React from 'react'
import Characters from './Characters.js'

const Answer = (props) => {

    return (
        <div key={props._id} className='quote-container'>
            <Characters
                hasAnswered
                ={props.hasAnswered}
                author={props.author}
                userSelection={props.userSelection}
                answer={props.answer}
                imgUrl={props.imgUrl}
                answerChoice={props.answerChoice}/>
        </div>

    )

}
export default Answer