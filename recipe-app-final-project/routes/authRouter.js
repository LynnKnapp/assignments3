const express = require("express")
const authRouter = express.Router()
const User = require("../models/user.js")
const jwt = require("jsonwebtoken")

authRouter.post('/signup', (req, res, next)=>{
    //does a user by that name already exist
    User.findOne({username: req.body.username.toLowerCase()}, (err, user)=>{
        if(err){
            res.status(500)
            return next (err)
        //does a user by that name already exist    
        }if(user !== null){
            res.status(400)
            return next(new Error("username is already taken"))
        }
        const newUser = new User(req.body)
        //save user in database

        newUser.save((err, savedUser)=>{
            if (err){
                res.status(500)
                return next(err)
            }
            //generate a token
            const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
            // include a response that includes the users info && a token
            return res.status(201).send({token, user: savedUser})
        })
    })
    
})
// LOGIN
authRouter.post("/login", (req, res, next) => {
    // Does the user already exist?
    User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500)
            return next(err)
        }
        // Does the user already exist?
        if(!user){
            res.status(401)
            return next(new Error("Username or Password is not correct!"))
        }
        // Does the user's password match the saved password
        if(user.password !== req.body.password){
            res.status(401)
            return next(new Error("Username or Password is not correct!"))
        }
        // creating the token
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        // and sending response with user and token
        return res.status(200).send({user: user.toObject(), token})
    })
})


module.exports = authRouter
