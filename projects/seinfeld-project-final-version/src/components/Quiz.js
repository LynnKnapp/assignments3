import React from 'react'
import Quote from './Quote.js'
import Answer from './Answer.js'
import Form from './Form.js'

const Quiz = (props)=>{

    console.log('Quiz props',props)
    return(
        <div>
           <Quote {...props}/>
           <Form newQuestion={props.newQuestion} 
            userSelection={props.userSelection} 
            handleChange={props.handleChange} 
            handleSubmit={props.handleSubmit}/>
           { props.hasAnswered && 
            <Answer author={props.author} 
            userSelection={props.userSelection}
            answerChoice={props.answerChoice}
            hasAnswered={props.hasAnswered}
            answer={props.answer} /> }      
        </div>
    )
}
export default Quiz