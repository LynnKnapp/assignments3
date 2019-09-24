import React, {Component} from 'react'
import './styles.css'

class App extends Component{
    constructor(){
        super()
        this.state ={
            firstName: '',
            lastName: '',
            email: '',
            place: '',
            phone: '',
            food: '',
            textarea: '',
            names: []


        }
    }
    
    handleChange =(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })        
    }           
        
    
    handleSubmit =(event)=>{
        event.preventdefault()

        const newName ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone:this.state.phone,
            food:this.state.food,
            textarea:this.state.textarea
        }

        this.setState(prevState =>({
            names:[...prevState.names, newName],
            firstName: '',
            lastName: '',
            email: '',
            place: '',
            phone: '',
            food: '',
            textarea: '',


        }))
        
    }

    

    render(){ 

    const mappedNames = this.state.names.map((name, i)=> 
    <div key= {i}><h1 >{name.firstName}
    </h1></div>)

        return(
            <div>
                <form className = 'form' 
                    onSubmit ={this.handleSubmit}>    
                    <h1 className = 'full-width'> Name Badge </h1>
                        <input type = 'text' className = 'input' name ='firstName' placeholder= 'First Name' value={this.state.firstName} onChange={this.handleChange} required minLength='3'/>
                        <input type = 'text' className = 'input' name ='lastName' placeholder ='Last Name' value={this.state.lastName} onChange={this.handleChange} required minLength='3'/>
                        <input type = 'text' className = 'input' name = 'email' placeholder = 'Email' value={this.state.email} onChange={this.handleChange} required minLength='3'/>
                        <input type = 'text' className = 'input' name = "place" placeholder = 'Place of Birth' value={this.state.place} onChange={this.handleChange} required minLength='3'/>
                        <input type = 'tel' className = 'input' name = 'phone' placeholder = 'Phone Number' value={this.state.phone} onChange={this.handleChange} required minLength='10'/>
                        <input type = 'text' className = 'input' name = 'food' placeholder = 'Favorite Food'value={this.state.food} onChange={this.handleChange} required minLength='3'/>
                        <textarea className = 'full-width'name = 'about' id = '' columns = '30' rows = '5' placeholder = 'Tell us about yourself' value={this.state.about} onChange={this.handleChange} required minLength='10' maxLength='100'/>
                        <div className ='full-width'>
                            <button className = 'button'> Submit </button>
                        </div> 
                </form> 
                <div>
                    {mappedNames}
                </div>         
            </div>
        )
    }    
}    
        
    
export default App
