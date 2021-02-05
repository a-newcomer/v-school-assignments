const mongoose = require('mongoose')
const Schema = mongoose.Schema

const controversySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  statement: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model("Controversy", controversySchema)