const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid/v4')

const todos =[
   {
    _id: uuid(),
    completed: false,
    name: "My Best Friend",
    description: "playing in the river",
    imgUrl: "https://images.unsplash.com/photo-1507512478290-e3ac1f55af94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
},{
    _id: uuid(),
    completed: false,
    name: "Pure Heaven",
    description: "Resting in fields",
    imgUrl: "https://images.unsplash.com/photo-1564665332510-a9613f2741e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
},{
    _id: uuid(),
        completed: false,
        name: "My Max",
        "description": "how I remember my best buddy",
        imgUrl: "https://images.unsplash.com/photo-1533786422045-5b0a2cd5e1bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
}]

todoRouter.route('/')

    .get((req, res) =>{
        console.log('hello')
    res.send(todos)
    })
    .post((req,res)=>{
        //The user's request body is found in req.body since we are using express.json()
        const newTodo = req.body
        //We simulate the DB by adding an _id to the object
        newTodo._id = uuid()
        //We simulate the DB by adding the object to the fake database
        todos.push(newTodo)
        //Send back the new movie object that has an _id
        res.send(newTodo)
    })
todoRouter.route('/:_id')
    .delete((req, res) =>{
        //We recieve the movie id through the request parameters
        const todoId =req.params._id
        //We find the index of the item in the database
        const todoToDelete = todos.findIndex(todo => todo._id === todoId)
        //We saved a reference to movie title (not necessary)
        const todoName = todos[todoToDelete].name
        //Update the DB
        todos.splice(todoToDelete, 1)
        //Send a response
        res.send('sucessfully deleted ${todoName}') 
    })
    .put((req, res) => {
        //We recieve the movie id through the request parameters
        const todoId = req.params._id
        //find the object to update
        const todoToUpdate = todos.find(todo => todo._id === todoId)
        //find the outdated movie object's index number
        const todoIndexToUpdate = todos.findIndex(todo => todo._id === todoId)
        //create the updated version
        const updatedToDo = Object.assign(todoToUpdate, req.body)
        //update the database with updated object
        todos.splice(todoIndexToUpdate, 1, updatedToDo)
        //send back the updated object
        res.send(updatedToDo)
    })
module.exports = todoRouter

