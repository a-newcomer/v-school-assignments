const express = require('express')
const app = express()
const thingRouter = require('./routes/thingRouter')

app.use("/things", thingRouter)

app.listen(5600, () => {
    console.log('Server is listening!')
})