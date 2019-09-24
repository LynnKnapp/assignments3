import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state ={
            firstName: '',
            lastName: '',
            age: '',
            people: []
        }
    }
    handleChange =(event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

        const newPerson ={
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
        }
        this.setState(prevState =>{
            return {
                people: [...prevState.people, newPerson]
            }
        })
    }
    render(){
        const mappedPeople = this.state.people.map(person =>{
            return <h1> {person.firstName} {person.lastName} {person.age} </h1>
        })
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <input type = 'text'
                        placeholder = 'First Name'
                        name = 'firstName'
                        value = {this.state.firstName}
                        onChange = {this.handleChange}/>
                    <input type = 'text'
                        placeholder = 'Last Name'
                        name = 'lastName'
                        value = {this.state.lastName}
                        onChange = {this.handleChange}/> 
                    <input type = 'text'
                        placeholder = 'Age'
                        name = 'age'
                        value = {this.state.age}
                        onChange = {this.handleChange}/> 
                    <button>Submit</button>                   
                    {mappedPeople}
                </form>
            </div>
        )
    }
}
export default Form