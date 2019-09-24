import React, {Component} from 'react'

class App extends Component{
    constructor(){
        super()
        this.state={
            title: '',
            color: 'blue'
            
        }

    }
   // fires when this component loads onto the page
    componentDidMount(){
        //the only thing we do an event listener is on keydown in react 
        window.addEventListener("keydown", (event)=>{
            if(event.which === '82'){
                this.setState({color: 'red'})
            }else if(event.which === 66){
                this.setState({color: 'pink'})
            }else if(event.which === 71){
                this.setState({color: 'blue'})
            }
        })
    }
    //fires whenever new props and new state are given to the component
    componentDidUpdate(){
      //this is checking if states color has been updated, and if so it will update the text in state to match it
      if(prevState.text !== this.state.color){
          this.setState({text: this.state.color} )
      } 
    }
    componentWillUnmount(){
        window.removeEventListener('keydown',null)
    }
    render(){
        console.log(this.state)
        return(
            <div>
                <div style ={{
                    width: 200,
                    height: 200,
                    border: "1px solid  black",
                    backgroundColor: this.state.color
                }}
                   
                
            </div>
        )
    }

}
export default App