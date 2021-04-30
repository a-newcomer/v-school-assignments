const express = require('express')
const authRouter = express.Router()
const User = require('../models/user.js')
const jwt = require('jsonwebtoken')

authRouter.post("/signup", (req,res, next) => {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
    if(err){
      res.status(500)
      return next(err)
    }
    if(user) {
      res.status(403) //forbidden error - there's already a user
      return next(new Error("That username is taken - use a different one"))
    }
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
      if(err){
        res.status(500)
        return next(err)
      }
      //After passing the above checks, using the .sign method, give the token a payload(the saved user) and a secret
      const token = jwt.sign(savedUser.withoutPassword(), process.env.SECRET)
      console.log(token)
      return res.status(201).send({token, user: savedUser.withoutPassword()})
    })
  })
})

authRouter.post("/login",  (req, res, next)=> {
  User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {

    console.log("req.body.username: ",req.body.username)
    if(err){
      res.status(500)
      return next(err)
    }
    if(!user) {
      res.status(403) //forbidden
      return next(new Error("Incorrect username or password"))
    }
    
    //Here we call a method from the user schema to compare hashed passwords
    //it needs a password attempt and callback function as arguments
    user.checkPassword(req.body.password, (err, isMatch)=> {
      if(err) {
        res.status(403)
        return next(new Error("Incorrect username or password"))
      }
      if(!isMatch) {
        res.status(403)
        return next(new Error("Username or password are not a match"))
      }
      const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
      return res.status(200).send({token, user: user.withoutPassword()})
    })
  })
})



module.exports = authRouter