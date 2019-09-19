import React from 'react'

const Post =(props)=>{
    return(
        <div>
           <h1>{props.title}</h1> 
           <h3>{props.subtitle}</h3>
           <h5>{props.date}</h5>
        </div>
    )
}
export default Post