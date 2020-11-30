const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

//connect to db
mongoose.connect('mongodb://localhost:27017/inventorydb',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
() => console.log('connected to the db.')
)

app.use("/inventory", require('./routes/inventoryRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

app.listen(5500, () => {
    console.log( `The server is running on port 5500.`)
})