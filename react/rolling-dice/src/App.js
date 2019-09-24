import React, {Component} from 'react'
import Die from './Die.js'


class App extends Component{
    constructor(){
        super()
        this.state ={
            nums: []
        }
    }

    random(count){
        let newArr = []
        for(let i = 0; i < count; i++){
            newArr.push(
                Math.floor(Math.random()*6) +1
            )
        }
        const firstParam =function (currentState){
            return {nums: newArr}
        }
        
        this.setState(firstParam)
}
render(){
            return(
                <div className = 'container'>
                    <button onClick={()=>(this.random(5))}>random</button>
                    {this.state.nums}
                    <div>
                        <Die num={this.state.nums}/>
                    </div>
                </div>
            )
        }
}        
export default App



