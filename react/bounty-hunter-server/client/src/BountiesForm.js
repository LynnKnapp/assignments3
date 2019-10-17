import React from 'react'
import Bounty from './Bounty.js'

const BountiesForm =(props) =>{
    
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <input 
                    type='text'
                    value={props.firstName}
                    onChange={props.handleChange}
                    name='firstName'
                    />First Name
                    <br/>
                <input
                    type='text'
                    value={props.lastName}
                    name='lastName'
                    onChange={props.handleChange}
                    />Last Name
                    <br/>
                <input
                    type='text'
                    value={props.isLiving}
                    name='isLiving'
                    onChange={props.handleChange}
                    />Is Living
                    <br/>
                <input 
                    type='text'
                    value={props.bountyPrice}
                    name='bountyPrice'
                    onChange={props.handleChange}
                    />Bounty
                    <br/>  
                <input
                    type='radio'
                    value='Sith'
                    name='type'
                    onChange={props.handleChange}/>Sith
                    <br/>
                <input
                    type='radio' 
                    value='Jedi'
                    name='type'
                    onChange={props.handleChange}/>Jedi
                    <br/>   
                <button>Submit</button>                 
            </form>
            <button onClick={props.handleDelete}></button>
            <Bounty/>
        </div>

    )
}
export default BountiesForm