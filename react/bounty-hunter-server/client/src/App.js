import React, {Component}   from 'react'
import axios from 'axios'
import BountiesForm from './BountiesForm'

class App extends Component{
    constructor(){
        super()
        this.state={
        bounties: [],
        FirstName: ' ',
        LastName: ' ',
        isLiving: true,
        bountyPrice: 0,
        type: ' '
        }
    }
    componentDidMount(){
        this.getBounties()
    }
    getBounties = () => {
        (axios.get("/bounties"))
            .then(res =>{
                console.log(res.data)
                this.setState({
                    bounties: res.data
                })

            })
            .catch(err => console.log('err'))
    }
    handlechange = event =>{
        this.setState=({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        const bounty = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            isLiving: this.state.isLiving,
            bountyPrice: this.state.bountyPrice,
            type: this.state.type
        }
        this.setState(prevState => ({
            bounties: [...prevState, ...bounty]
        }))
    }
    handleDelete = () =>{
        axios.delete('/bounties/_id')
        .then(response => {
            console.log(response)
            this.setState((prevState,id) =>{
                const filteredBounties = prevState.bounties.filter(bounty =>{
                    return id !==bounty._id
                })
                return{bounties: filteredBounties}
            })
        })
    }
    render(){
        return(
            <div>
              <BountiesForm/>  
            </div>
        )
    }
} 
export default App   
