import React, {Component} from 'react'
import Box from './Box.js'
import axios from 'axios'

class App extends Component{
    constructor(){
        super()
            this.state ={
                color: ''
            }
        }
    
    componentDidMount(){
        axios.get('http://www.colr.org/json/color/random')
            .then(response => {
                this.setState({
                    color: response.data.colors[0].hex
                }, () => console.log(this.state))
            })
            .catch(error => console.log(error))
            
    }
    render(){
        return(
            <div>
                <Box 
                color={this.state.color}/>
            </div>
        )
    }
}
export default App