import React from 'react'
import Header from './Header.js'
import Navbar from './Navbar.js'
import PostList from './PostList.js'
import Post from './Post.js'
import Footer from './Footer'


const App =(props)=>{
    return(
        <div>
           <Header/>
           <PostList/>
        </div>
    )
}
export default App 
