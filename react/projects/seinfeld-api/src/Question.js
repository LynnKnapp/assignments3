import React, {Component} from './react'
import axios from 'axios'



class Question extends Component{
    constructor(){
        super()
        this.state={
            "quote": "The greasy doorknob, the constant licking of the fingers.  He's hooked on the chicken, isn't he?",
            "author": "Jerry",	
            "image": "/assets/Screen Shot 2019-09-30 at 1.50.13 PM.png "
            }
    
    getQuotes = () => { axios.get('https://seinfeld-quotes.herokuapp.com/random')
            .then(response =>{        

                this.setState({
                    quote 
                })
                console.log(this.state.quotes)
            })
            .catch(error => console.log(error))
            
    } 

    render(){
        const quotesArr = this.state.quotes
        const mappedQuotes = quotesArr.map(quote => <Quiz userSelection={this.state.userSelection} answer={quote.author} answerChoice={this.state.answerChoice} quote={quote.quote} key={Quote._id} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>)
        return(
            <div>
                {mappedQuotes[this.state.currentQuoteIndex]}
            </div>
        )
}
export default Question