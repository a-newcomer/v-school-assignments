import { text } from "express"
import mongoose from "mongoose"
const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
    type: text,
    required: true
  }
})

module.exports = mongoose.model("Comment", commentSchema)