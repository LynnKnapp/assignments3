import React, {Component} from 'react'
import './styles.css'
import axios from 'axios'
import Quiz from './Quiz'
import Quote from './Quote'
import Logo from './assets/logo.png'

class QuoteList extends Component{
    constructor(){
        super()
        this.state ={
            quotes: [],
            userSelection: "",
            currentQuoteIndex: 0,
            showimage: '',
            answerChoice: false,
            hasAnswered: false,
            
        }
    }
    componentDidMount(){
        this.getQuotes()
    }
    handleChange=(event)=>{
     
        this.setState({
            userSelection: event.target.value
        })
    }
    newQuestion =()=>{
        this.setState(prevState => {
            console.log(this.state.answerChoice)
         return {
            currentQuoteIndex: prevState.currentQuoteIndex + 1, 
            answerChoice: false,
            hasAnswered: false
         }

        })
    }

    handleSubmit =(event,props)=>{ 
        event.preventDefault()
        //  this.setState({answerChoice = false})
        // console.log(props.userSelection)
        if(this.state.userSelection === this.state.quotes[this.state.currentQuoteIndex].author){
            console.log('correct')
            this.setState({
                answerChoice: true,
                hasAnswered: true,
                
            })
            
        } else {
            console.log("userSelection", this.state.userSelection)
            console.log("author", this.state.quotes[this.state.currentQuoteIndex].author)
            console.log('wrong answer')
            this.setState({
                answerChoice: false,
                hasAnswered: true
            })
        }
    }
    
    getQuotes = () => { axios.get('https://seinfeld-quotes.herokuapp.com/quotes')
            .then(response =>{
                const favorites = [421,389,396,398,303,129,142,247,395]
                const bestQuotes = response.data.quotes.filter((item, i)=>{
                    return favorites.includes(i)
                })

                this.setState({
                    quotes: bestQuotes 
                })
                console.log(this.state.quotes)
            })
            .catch(error => console.log(error))
            
    } 
    render() {  
        const quotesArr = this.state.quotes
        const mappedQuotes = quotesArr.map(quote => 
            <Quiz author={this.state.quotes[this.state.currentQuoteIndex].author} 
                newQuestion ={this.newQuestion} 
                hasAnswered={this.state.hasAnswered} 
                userSelection={this.state.userSelection} 
                answer={quote.author} 
                answerChoice={this.state.answerChoice} 
                quote={quote.quote} key={Quote._id} 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit}
            />)
        return(
            <div className='subtitle'>
                <div className='logo-img'>
                    <img src={Logo} alt="logo" />
                </div>
                    <h1>The Quiz About Absolutely Nothing</h1>    
                    {mappedQuotes[this.state.currentQuoteIndex]}
                </div>
        )
    } 
}
export default QuoteList