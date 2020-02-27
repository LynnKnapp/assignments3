import React from 'react'
import './styles.css'

const Quote =(props) => {
    console.log('Quote props', props)
    return(
        <div key={props._id} className='quote-container'>
            <h1>Which Character Said The Following:</h1> 
            <h2>{props.quote}</h2>
        </div>
    )
}
export default Quote