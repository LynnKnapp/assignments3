import React from 'react'
import './styles.css'


const Form =(props)=>{ 

    
    return(
        <div className= 'form-container'>
            <form className= 'form' onSubmit ={props.handleSubmit}>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Jerry' checked={props.userSelection === 'Jerry'} onChange={props.handleChange}/>Jerry Seinfeld
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Elaine' checked={props.userSelection === 'Elaine'} onChange={props.handleChange}/>Elaine Benes
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='George' checked={props.userSelection === 'George'} onChange={props.handleChange}/>George Costanza
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Kramer' checked={props.userSelection === 'Kramer'} onChange={props.handleChange}/>Cosmo Kramer 
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Newman' checked={props.userSelection === 'Newman'} onChange={props.handleChange}/>Newman
                    </div>
                    <div className='choice' >
                        <input type='radio' name='userSelection' value='Frank Costanza' checked={props.userSelection === 'Frank Costanza'} onChange={props.handleChange} />Frank Costanza
                    </div>
                      
                    <div className='buttons' >  
                        <button className = 'submit'>Submit</button>    
                    </div>
                </form>
                    <button className='next-question' onClick={props.newQuestion}>Next Question</button>    
        </div>  
    )}

export default Form