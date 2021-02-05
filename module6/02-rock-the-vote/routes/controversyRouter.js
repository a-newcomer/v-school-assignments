const express = require("express")
const controversyRouter = express.Router()
const Controversy = require('../models/controversy.js')

// Get All controversies
controversyRouter.get("/", (req, res, next) => {
  Controversy.find((err, controversies) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(controversies)
  })
})

//Get controversies by user id
controversyRouter.get("/user", (req, res, next) =>{
  Controversy.find({user: req.user._id }, (err, controversies)=> {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(controversies)
  })
})

// Add new Controversy
controversyRouter.post("/", (req, res, next) => {
  req.body.user = req.user._id // This uses the user property (added by jwt) to connect to the controversy's user property
  const newControversy = new Controversy(req.body)
  newControversy.save((err, savedControversy) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedControversy)
  })
})

// Delete Controversy
controversyRouter.delete("/:controversyId", (req, res, next) => {
  Controversy.findOneAndDelete(
    { _id: req.params.controversyId, user: req.user._id },
    (err, deletedControversy) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted Controversy: ${deletedControversy}`)
    }
  )
})

// Update Controversy
controversyRouter.put("/:controversyId", (req, res, next) => {
  Controversy.findOneAndUpdate(
    { _id: req.params.controversyId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedControversy) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedControversy)
    }
  )
})

module.exports = controversyRouter