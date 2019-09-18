import React from 'react'

const Box = (props)=>{
    let style = {
        backgroundColor: props.backgroundColor,
        height: '300px',
        width: '300px',
        fontSize: '18px',
        border: '5px solid black', 
        textAlign: 'center'
    };
    return(
        <div style = {style}>
    
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.info}</p>
        </div>
    )
} 
export default Box