const express = require("express")
const controversy = require("../models/controversy.js")
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
  .populate('user')
  .exec(function(err, user) {
    if(err) return next(err)
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

// Update Controversy with a userID to upvote array
controversyRouter.put("/likes/:controversyId", (req, res, next) => {
  Controversy.findOneAndUpdate(
    { _id: req.params.controversyId },
    //
    {$addToSet: {upVotes: req.user._id}},
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

// Delete/Update Controversy by deleting an upvote from a specific controversy
controversyRouter.delete("/likes/:controversyId", (req, res, next) => {
  Controversy.findOneAndDelete (
    //{ _id: req.params.controversyId, upVotes: req.user._id },
   console.log(req.user),
   
    (err, deletedUpVote) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(deletedUpVote)
    }
  )
})

// Update Controversy with a userID to downvote array
controversyRouter.put("/dislikes/:controversyId", (req, res, next) => {
  Controversy.findOneAndUpdate(
    { _id: req.params.controversyId },
    {$addToSet: {downVotes: req.user._id}},
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