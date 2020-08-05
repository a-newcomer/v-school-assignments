const express = require('express')
const app = express()
const toDoRouter = require('./routes/toDoRouter.js')

app.use(express.json())
app.use((req, res, next)=> {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})
app.use("/todos", toDoRouter)

//arg 1: Port number choose any from 3000 - 9000
// arg 2: Callback function
app.listen(5500, () => {
    console.log("My server is running on port 5500!")
})
