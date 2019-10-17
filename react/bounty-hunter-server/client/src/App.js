import React,{Component} from 'react'
import axios from 'axios'
import BountiesForm from './BountiesForm.js'
import Bounty from './Bounty.js'
import './styles.css'

class App extends Component{
  constructor(){
      super()
      this.state={
      bounties: [],
      firstName: ' ',
      lastName: ' ',
      isLiving: true,
      bountyPrice: 0,
      type: ' '
      }
  }
  componentDidMount(){
      this.getBounties()
  }
  getBounties = () => {
      axios.get('/bounties')
          .then(res =>{
              console.log(res.data)
              this.setState({
                  bounties: res.data
              })
          })
          .catch(err => console.log(err))
  }
  handleChange = event =>{
      this.setState({
          [event.target.name]: event.target.value
      })       
  }
  handleSubmit = event =>{
      event.preventDefault()
      const bounty = {
          firstName: this.state.FirstName,
          lastName: this.state.LastName,
          isLiving: this.state.isLiving,
          bountyPrice: this.state.bountyPrice,
          type: this.state.type
      }
      axios.post('/bounties', bounty)
          .then(res =>{
              this.setState(prevState =>({
                  bounties:[...prevState.bounties, res.data],
                  firstName: '',
                  lastName: '',
                  isLiving: true,
                  bountyPrice: 0,
                  type: ''
              }))    
          })
          .catch(err => console.log(err))
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
  handleEdit =() =>[
      axios.put('/bounties/_id')
      .then(response =>{
          console.log(response)
      })
  ]
  render(){
     const mappedBounties= this.state.bounties.map(bounty =>
      <Bounty
      {...bounty}
      handleChange={this.state.handleChange}
      handleSubmit={this.state.handleSubmit}
      />  
     )
      return(
          <div>
           <BountiesForm />
           {mappedBounties}
          </div>
      )
  }
} 
export default App
              
