const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  votedOn: {
    type: Schema.Types.ObjectId,
    ref: "Controversy"
  }
})
//the below is a function called a pre-save hook to encrypt passwords - it needs to be a "function", not anon, so we can use "this"
//it functions like a method on a class - the schema would be the constructor part
userSchema.pre("save", function(next){
  const user = this
  //then we need to make sure that this is the first time the user is here -if not, go on
  if(!user.isModified("password")) return next()
    //so if it is, we hash it - for that we need the user's pw and salt rounds (?), and we come back with either the hash or an error
    bcrypt.hash(user.password, 10, (err, hash)=> {
      if(err) return next(err)
      //if we got the hash, we need to apply it, and overwrite the password
      user.password = hash
      next()
    })
})
//the below is a method to check encrypted password when logging in
userSchema.methods.checkPassword = function(passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if(err) return callback(err)
    //so we do something with the callback method that we've passed in as a parameter, or, if there's no error, then we can pass that into the callback as null to do something with our match
    return callback(null, isMatch)
  })
}
//method to remove user's password for token/sending response - so it can't be seen from the front end
userSchema.methods.withoutPassword = function() {
  const user = this.toObject()
  delete user.password
  return user
}

module.exports = mongoose.model("User", userSchema)