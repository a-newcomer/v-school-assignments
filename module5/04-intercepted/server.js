const express = require('express')
const app = express()


app.use(express.json())

app.use("/books", require("./routes/bookRouter"))

app.use('/books', (req, res, next) => {
    console.log('middleware executed')
    next()
})

app.get("/books", (req,res, next) => {
    console.log('Get request recieved.')
    res.send(req.body)
})

app.listen(5600, () => {
    console.log('My server is running!')
})