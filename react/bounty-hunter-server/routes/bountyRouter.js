const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')



const bounties=[{
    _id: uuid(),
    firstName: 'Shithead',
    lastName: 'Jones',
    isLiving: true,
    bountyPrice: 200,
    type: 'Sith'
},{
    _id: uuid(),
    firstName: 'Bozohead',
    lastName: 'Smith',
    isLiving: true,
    bountyPrice: 300,
    type: 'Sith'  
},{
    _id: uuid(),
    FirstName: 'Zipperhead',
    LastName: 'Stubborn',
    isLiving: true,
    bountyPrice: 400,
    type: 'Sith'  
}]

//Get All request
bountyRouter.get('/', (req, res) => {
    Bounty.find((err, bounties) =>{
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(bounties)
    })
})
//Get One
bountyRouter.get('/, _id', (req, res) => {
//req.params has access to the _id key and value
//findById mongoose method
//argument two: call back function that handles err and movie 
    Bounty.findById(req.params._id ,(err, bounty) => {
        if(err){
            res.status(500)
            return res.send('error')
        }else if(!bounty){
            res.status(404)
            return next(new Error('bounty not found'))
        }
        return res.send(bounty)
    })
})

//Post
bountyRouter.post('/',(req, res)=>{
    const newBounty = new Bounty(req.body)
    newBounty.save((err,newBounty)=>{
        if(err){
            res.status(500)
            return res.next(err)
        }
    })
    return res.send(newBounty)
} )   

//Delete
bountyRouter.delete('/:_id', (req, res)=>{

})
//Put
bountyRouter.put('/:_id', (req,res)=>{

})
// bountyRouter.route('/')
//     .get((req, res)=>{
//         res.send(bounties)
//     })
//     .post((req,res,)=>{
//         const newBounty = req.body
//         newBounty._id = uuid()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })

// bountyRouter.route('/:_id')
//     .get((req, res)=>{
//         const singleBounty = bounty.find(bounty => bounty._id === req.params._id)
//         res.send(singleBounty)
//     })
//     .delete((req,res)=>{
//         const bountyID =req.params._id
//         const bountyToDelete = bounties.findIndex(bounty => bounty._id === bountyID) 
//          bounties.splice(bountyToDelete, 1)  
//          res.send('sucessfully deleted') 
//     })
//     .put((req, res)=>{
//         const bountyId =req.params._id
//         const bountyToUpdate =bounties.find(bounty => bounty._id === bountyId)
//         const bountyIndexToUpdate =bounties.findIndex(bounty => bounty._id === bountyId)
//         const updatedBounty =Object.assign(bountyToUpdate, req.body)
//         bounties.splice(bountyIndexToUpdate, 1, updatedBounty)
//     })    

module.exports = bountyRouter