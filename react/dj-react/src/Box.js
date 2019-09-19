import React from 'react'

const Box =(props)=>{
    return(
        <div>
         <div className = 'box' 
            style ={{backgroundColor: props.color}}>{props.num}</div>
        </div>
    )
}
export default Box