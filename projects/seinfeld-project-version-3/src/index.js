import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {BrowserRouter} from 'react-router-dom'
import ContextCharacters from './components/ContextCharacters'

ReactDOM.render( 
    <ContextCharacters>
        <BrowserRouter>
            <App/>
        </BrowserRouter> 
    </ContextCharacters>
    ,document.getElementById('root'))