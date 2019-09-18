import React from 'react'
import Header from './components/Header.js'
import Navbar from './components/Navbar.js'
import Info from './components/Info.js'
import Products from './components/Products.js'
import Footer from './components/Footer.js'
import './styles.css'



const App =(props)=>{
    return(
        <div>
           <Header/>
           <Navbar/>
           <Info/>
           <Products/>
           <Footer/>
        </div>
    )    
}
export default App