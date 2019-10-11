import React, {Component}   from 'react'
import axios from 'axios'

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
        (axios.get('/bounties'))
            .then(res =>{
                console.log(res.data)
                this.setState({
                    bounties: res.data
                }, () => console.log(this.state))

            })
            .catch(err => console.log('err'))
    }
    render(){
        return(
            <div>
            Hellooooooooo la la la 
            </div>
        )
    }
} 
export default App   
