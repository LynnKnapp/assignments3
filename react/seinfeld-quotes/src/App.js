import React, {Component} from 'react'
import axios from 'axios'

class App extends Component{
    constructor() {
        super()
        this.state={
            quotes: []
        }

    }
    componentDidMount(){
        this.getQuotes()
    }    
    getQuotes = () => { axios.get('https://seinfeld-quotes.herokuapp.com/quotes')
            .then(response =>{
                this.setState({
                    quotes: response.data
                })
                console.log(this.state.quotes)
            })
            .catch(error => console.log(error))
            
    } 
    render(){
        return(
            <>
                Hello World
            </>    
        )
    } 
}         
export default App
