const express = require("express")
const commentRouter = express.Router()
const Controversy = require('../models/controversy.js')
const Comment = require('../models/comment.js')
const User = require("../models/user.js")
const { response } = require("express")


// Get All comments
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//Get comments by controversy
commentRouter.get("/:controversyID", (req, res, next) =>{
  Comment.find({controversy: req.params.controversyID }, (err, comments)=> {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

//post/add comments to a controversy
//maybe add username as a parameter to the api?
commentRouter.post("/:controversyID", (req, res, next) => {
  req.body.user = req.user._id 
  req.body.controversy = req.params.controversyID
  console.log('req.body: ', req.body)
  const newComment = new Comment(req.body)
  newComment.save((err, savedComment) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedComment)
  })
})

//Delete comment
commentRouter.delete("/:commentId", (req, res, next) => {
  console.log(req.params)
  Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.user._id },
    (err, deletedComment) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted comment: ${deletedComment}`)
    }
  )
})

//add a function
module.exports = commentRouter