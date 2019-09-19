import React from 'react'
import Box from './Box.js'

const App = () => {
    return(
        <div>
            <Box boxClass = 'box1' 
            backgroundColor = 'yellow'
            title = "Yellow"
            subtitle = "It's just yellow damnit" 
            info = "I need to find a yellow that's clear, not creamy"/>
            <Box boxClass = 'box2' 
            backgroundColor = 'black'
            title = 'Black'
            subtitle = "It's just black!!!"
            info = "What's wrong with my color, I have 6 numbers, I'll just put black."/>
            <Box boxClass = 'box3' 
            backgroundColor = 'pink'
            title = 'Pink'
            subtitle = "It's pink I think"
            info = "My favorite color pink"/>
            <Box boxClass = 'box4' 
            backgroundColor = 'purple'
            title = "Purple"
            subtitle = "Purple is the best!"
            info = "fhdjskafhjeh"/>
            <Box boxClass = 'box5' 
            backgroundColor = 'teal'
            />
            <Box boxClass = 'box7' backgroundColor = 'red'/>
            <Box boxClass = 'box8' backgroundColor = 'blue'/>
            <Box boxClass = 'box9' backgroundColor = 'lavender'/>
            <Box boxClass = 'box10' backgroundColor = 'green'/>
        </div>
    )
}
export default App