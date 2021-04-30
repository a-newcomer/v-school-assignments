const express = require('express')
const app = express()//this is our server we've created
require('dotenv').config() //this is the file to keep our secret safe
const morgan = require('morgan') //to see errors better
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')//the token

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
  'mongodb://localhost:27017/user-auth',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)

//app.use('/todos', require('./routes/todoRouter.js'))
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt( {secret: process.env.SECRET, algorithms: ['HS256'] })) //This adds req.user to the req body, the first step in connecting authorization to our other routes
app.use('/api/controversies', require('./routes/controversyRouter.js'))
app.use('/api/comments', require('./routes/commentRouter.js'))

app.use((err, req, res, next) => {
  console.log(err)
  //this sends a nice error if the user isn't authorized
  // if(err.name === UnauthorizedError) {
  //   res.status(err.status)
  // }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})