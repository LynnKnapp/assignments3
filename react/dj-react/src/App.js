import React, {Component} from 'react'
import './styles.css'
import Box from './Box.js'

class App extends Component{
    constructor(){
        super()
        this.state ={
            boxes: ['yellow', 'red', 'green', 'blue']
        }
    }
    handleSmackMe =() =>{
        this.setState({
            boxes: ['white', 'white', 'white', 'white']
        })
        if(this.state.boxes[0] !== 'white'){
            this.setState({
                boxes: ['white', 'white', 'white', 'white']
            })
        }else{
            this.setState({
                boxes: ['black', 'black', 'black', 'black']
            })
        }

    }
    handlePartyTimeMe =()=>{
        function changeToPurple(currentColors){
            const newState =  {boxes: ['purple', 'purple', currentColors.boxes[2], currentColors.boxes[3]]}
            return newState
        }
            this.setState(changeToPurple)
                
        
    }
    handleLeftProfessionalDJ =()=>{
        function changeRightBlue(currentColors){
            const newState = {boxes: [currentColors.boxes[0], currentColors.boxes[1], 'blue', currentColors.boxes[3] ]}
            return newState
        }
        this.setState(changeRightBlue)
    }
    handleRightProfessionalDJ =()=>{
        function changeRightBlue(currentColor){
            const newState = {boxes: [currentColor.boxes[0], currentColor.boxes[1], currentColor.boxes[2], 'blue' ]}
            return newState
        }
        this.setState(changeRightBlue)
    }
    handleBigTimeDJ1=()=>{
        function changeOnePink(currentColor){
            const newState ={boxes: ['green', currentColor.boxes[1], currentColor.boxes[2], currentColor.boxes[3]]}
            return newState
        }
        this.setState(changeOnePink)
    }
    handleBigTimeDJ2 =()=>{
        function changeOneCoral(currentColor){
            const newState ={boxes: [currentColor.boxes[0], 'darkblue', currentColor.boxes[2], currentColor.boxes[3]]}
            return newState
        }
        this.setState(changeOneCoral)
    }
    handleBigTimeDJ3 =()=>{
        function changeOneOrange(currentColor){
            const newState ={boxes: [currentColor.boxes[0], currentColor.boxes[1], 'orange', currentColor.boxes[3]]}
            return newState
        }
        this.setState(changeOneOrange)
    }
    handleBigTimeDJ4 =()=>{
        function changeOneRed(currentColor){
            const newState ={boxes: [currentColor.boxes[0], currentColor.boxes[1], currentColor.boxes[2], 'red']}
            return newState
        }
        this.setState(changeOneRed)
    }


    render(){
       
       return(
           <div className = 'container'>
                {Box({num:'11', color: this.state.boxes[0]})} 
                <Box num = '2' color = {this.state.boxes[1]}/>
                <Box num = '3' color = {this.state.boxes[2]}/>
                <Box num = '4'  color = {this.state.boxes[3]}/>
                <button onClick = {this.handleSmackMe}>smack me</button>
                <button onClick = {this.handlePartyTimeMe}>party time</button>
                <button onClick = {this.handleLeftProfessionalDJ}>Left Professional DJ </button>
                <button onClick = {this.handleRightProfessionalDJ}>Right Professional DJ</button>
                <button onClick = {this.handleBigTimeDJ1}>Big Time DJ1 </button>
                <button onClick = {this.handleBigTimeDJ2}>Big Time DJ2 </button>
                <button onClick = {this.handleBigTimeDJ3}>Big Time DJ3 </button>
                <button onClick = {this.handleBigTimeDJ4}>Big Time DJ4 </button>
            </div>     
            
       )
    }
}
export default App 
