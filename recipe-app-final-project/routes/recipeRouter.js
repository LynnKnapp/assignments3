const express = require("express")
const recipeRouter = express.Router()
const Recipe = require("../models/recipe")



recipeRouter.get('/', (req, res, next) =>{
    Recipe.find((err, recipes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(recipes)
    })
})

recipeRouter.get('/user', (req, res, next) =>{
    Recipe.find({user: req.user._id}, (err, recipes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(recipes)
    })
})

recipeRouter.get('/healthy', (req, res, next) =>{
    const query = { dietType: "Healthy" }
    const send = (err, resultsOfFind) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        res.status(200).send(resultsOfFind)
    }
    
   Recipe.find(query, send)
})

recipeRouter.get('/indulgent', (req, res, next) =>{
    const query = {dietType: "Indulgent"}
    const send = (err, resultsOfFind) => {
        if(err) {
            res.status(500)
            return next (err)
        }
        res.status(200).send(resultsOfFind)
    }
    Recipe.find(query, send)
})

recipeRouter.get("/:_id", (req, res, next)=>{
    Recipe.findOne({_id: req.params._id}, (err, recipe)=> {
        if(err) {
            res.status(500)
            return next (err)
        }else if(!recipe){
            res.status(404)
            return next (new Error("recipe not found"))
        }
        return res.status(201).send(recipe)
    })
})

recipeRouter.post("/", (req, res, next) =>{
    req.body.user = req.user._id
    const newRecipe = new Recipe(req.body)
    newRecipe.save((err, newRecipe) =>{
        if(err) {
            res.status(500)
            return next(err) 
        }
        return res.status(201).send(newRecipe)
    })
})

recipeRouter.put("/:_id", (req,res, next)=>{
    Recipe.findOneAndUpdate(
        {_id: req.params._id, user: req.user._id}, 
        req.body, 
        {new: true}, 
        (err, recipe)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(recipe)
    })

})

recipeRouter.delete("/:_id", (req, res, next)=>{
    Recipe.findOneAndRemove({_id: req.params._id, user: req.user._id},  (err, recipe)=>{
        if(err){
            res.status(500)
        }
        return res.status(200).send("sucessfully deleted")
    })
})


module.exports = recipeRouter