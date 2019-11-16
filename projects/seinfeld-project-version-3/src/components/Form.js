import React from 'react'
import './styles.css'

const Form =(props)=>{
    return(
        <section>
            <form className= 'form' onSubmit ={props.handleSubmit}>
                    <div className='choice'>
                        <input className = 'input'type='radio' name='userSelection' value='Jerry' onChange={props.handleChange}/><h2>Jerry Seinfeld</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Elaine'onChange={props.handleChange}/><h2>Elaine Benes</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='George'onChange={props.handleChange}/><h2>George Costanza</h2>
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Kramer' onChange={props.handleChange}/><h2>Cosmo Kramer</h2> 
                    </div>
                    <div className='choice'>
                        <input type='radio' name='userSelection' value='Newman'onChange={props.handleChange}/><h2>Newman</h2>
                    </div>
                    <div className='choice' >
                        <input type='radio' name='userSelection' value='Frank Costanza' onChange={props.handleChange} /><h2>Frank Costanza</h2>
                    </div>
                <div className='buttons'>    
                    <button className = 'submit'>Submit</button>
                    <button className='next-question'onClick={props.newQuestion}>Next Question</button>
                </div>
                </form>
        </section>  
    )
}
export default Form