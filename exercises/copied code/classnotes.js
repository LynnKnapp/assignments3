import React,{Component,} from 'react'
import axios from 'axios';



class Searchbar extends Component{
    constructor(props){
        super(props)
        this.state={
            search: '',
            animals: [],
            searchResults: [],
        }
    }
    componentDidMount() { 
          axios.get('/cats')
          .then(res =>{
            // console.log('res.data in search for cats',res.data)
            this.setState(prevState => ({
                animals: [...prevState.animals, ...res.data]
            }))
        })
        .catch(err => console.log(err))
        
        axios.get('/dogs')
        .then(res =>{
            // console.log(res.data)
            this.setState(prevState => ({
                animals: [...prevState.animals, ...res.data]
            }))
        })
        .catch(err => console.log(err))
        
    }
    
    handleChange=(e)=> {
        this.setState({
            search: e.target.value
        })
        
    }
    handleSubmit=(e) => {
        e.preventDefault()
        // create a new array from this.state.animals filtering by breed.
        const filteredPets = this.state.animals.filter((pet) => {
            console.log('pet:', pet)
            //return true if the search matches an animal
            //search - String
            //animals - Array of objects
            //animal object - name, breed, sex, age, color
            //filtered results - Array of specific objects
            return true
        })
            this.setState(prevState => {
                return {
                    searchResults: filteredPets
                }
            }
            )   
    }

    render(){
        // console.log(this.state)
        return(
            <>
                <form onSubmit = {this.handleSubmit}>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
                </form>
            </>
        )
    }
}
export default Searchbar