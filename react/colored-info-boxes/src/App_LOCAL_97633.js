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
            backgroundColor = 'orange'
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
            title = 'Teal'
            subtitle = 'Teal is for turtles'
            info = 'What can I say about teal.'/>
            <Box boxClass = 'box7'
             backgroundColor = 'red'
             title = 'Red'
             subtitle = 'Bloody Red'
             info = 'Red is not '/>
            <Box boxClass = 'box8' 
            backgroundColor = 'blue'
            title = 'Blue'
            subtitle = " It's just blue"
            info = "Isn't blue so beautiful"/>
            <Box boxClass = 'box9' 
            backgroundColor = 'lavender'
            title = 'Lavender'
            subtitle = 'Luciousness'
            info = "Isn't lavender so very lovely"/>
            <Box boxClass = 'box10' 
            backgroundColor = 'green'
            title = "Green"
            subtitle = "Gross Green"
            info = " Really gross things are green"/>
        </div>
    )
}
export default App