import React from 'react'
import QuoteList from './components/QuoteList.js'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Quiz from './components/Quiz.js'
import CharacterFacts from './components/CharacterFacts.js'
import {Switch, Route, withRouter} from 'react-router-dom'
import FavoriteClips from './components/FavoriteClips.js'

const App = () =>{    
        return(
            <div>
            <Navbar/> 
            <Switch> 
                <Route exact path ='/' component = {QuoteList}></Route>
                <Route path ='/characterfacts' component={CharacterFacts}></Route>
                <Route path ='/FavoriteClips' component={FavoriteClips}></Route>

            </Switch>
             

            </div>
        )
    
}
export default withRouter(App)