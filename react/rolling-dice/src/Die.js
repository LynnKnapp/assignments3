import React from 'react'



const Die = (props)=>{
    
    function newdie(value, index, array){
        
    return <div className= 'die' key={index} className= 'die'>{value}</div>
            
    }
    const newArr = props.num.map(newdie)
     return newArr   
        
}
export default Die