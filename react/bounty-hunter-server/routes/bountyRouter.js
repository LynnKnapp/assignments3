const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')
//mongoose gives structure for data


//Get All request
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounties) =>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
//Get One
bountyRouter.get('/:_id', (req, res, next) => {
//req.params has access to the _id key and value
//findById mongoose method
//argument two: call back function that handles err and movie 
    Bounty.findOne({_id: req.params._id}, (err, bounty) => {//find from mongoose
        if(err){
            res.status(500)
            return next(err)
        }else if(!bounty){
            res.status(404)
            return next(new Error('bounty not found'))
        }
        return res.status(201).send(bounty)
    })
})

//Post
bountyRouter.post("/",(req, res, next) => {
    //mongoose save method takes a callback function
    //callback function handles the error and the object being
    //add user's _id to the new bounty objeect before saving it in the DB
    // req.body.user = req.user._id
    const newBounty = new Bounty(req.body)
    newBounty.save((err,newBounty)=>{
        if(err){
            res.status(500)
            return next(err)
        }
    })
    return res.status(201).send(newBounty)
} )   

//Delete
bountyRouter.delete('/:_id', (req, res, next)=>{
    //argument 1 : id
    //argument 2: callback function, handles the error and bounty
    Bounty.findByIdAndRemove(req.params._id, (err, bounty)=>{
        if(err){
            res.status(500)
        }
        return res.status(200).send('sucessfully deleted')

    })
})
//Put
bountyRouter.put('/:_id', (req,res, next)=>{
    //findByIdAndUpdate
    //argument one: id
    // argument two: updated bounty
    // argument three: {new: true}
    // argument four: callback function that handles err and bounty
    Bounty.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new: true}, 
        (err, bounty)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(bounty)
    })

})

module.exports = bountyRouter
