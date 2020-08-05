const express = require('express')
const app = express()
const morgan = require('morgan')
const movieRouter = require('./routes/movieRouter.js')

app.use(express.json())//looks for a rquest body and turns it into req.body
app.use(morgan('dev'))//logs requests to the console

app.use("/movies", movieRouter)

//arg 1: Port number choose any from 3000 - 9000
// arg 2: Callback function
app.listen(9000, () => {
    console.log("My server is running on port 9000!")
})
