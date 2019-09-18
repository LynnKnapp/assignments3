import React from 'react'
import Spot from './Spot.js'
import './Styles.css'


function App(){
    // console.log(props.data)
        const vacationSpots = [
        
            {_id: "0", place: "Meridian, Idaho", price: 40, timeToGo: "Spring"},
            {_id: "1", place: "Cancun", price: 900, timeToGo: "Winter"}, 
            {_id: "2", place: "China", price: 1200, timeToGo: "Fall"},
            {_id: "3", place: "Russia", price: 1100, timeToGo: "Summer"},
            {_id: "4", place: "Lebanon", price: 400, timeToGo: "Spring"},     
          ]
      let mappedSpot = vacationSpots.map(spot =>{
          return(
        <Spot key ={spot._id} place ={spot.place} price ={spot.price} timeToGo ={spot.timeToGo}/>)})
            
      
    return(
        <div>
            {mappedSpot}
        </div>
    )
}

export default App