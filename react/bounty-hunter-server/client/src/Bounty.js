import React from 'react'


const Bounty =(props)=>{
    return(
        <div className ='bountyContainer'>
            <h1>{props.firstName}</h1>
            <h1>{props.lastName}</h1>
            <h1>{props.isLiving}</h1> 
            <h1>{props.bountyPrice}</h1>
            <h1>{props.type}</h1>  
        </div>
    )
}

export default Bounty