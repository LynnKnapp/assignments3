import React from 'react'

const Spot = (props)=>{
    let season
        if(props.timeToGo === 'Fall'){
            season = 'orange'
        }else if(props.timeToGo === 'Winter'){
            season = 'blue'
        }else if(props.timeToGo === 'Spring'){
            season = 'yellow'
        }else{
            season = 'pink'
        }  
    return(
        <div className = 'vacation' style={{backgroundColor: season}}>
            <h1>{props.place}</h1>
            <h2>{props.price}</h2> 
            <h3>{props.timeToGo}</h3>   
        </div>
    )
}
export default Spot