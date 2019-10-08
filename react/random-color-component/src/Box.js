import React from 'react'

const Box = (props)=>{
    return(
        <div> 
            <div style = {{backgroundColor: `#${props.color}`, height: '100px', width: '100px', border: '2px solid black'}}>
            hello
            </div>
        </div>    
            
        
    )

}
export default Box