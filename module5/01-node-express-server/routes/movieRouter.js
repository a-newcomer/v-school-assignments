const express = require('express')
const movieRouter = express.Router()
const {uuid} = require("uuidv4")

const movies =[
    {
    "title": "Lord of the Rings",
    "year": 2007,
    "genre": "fantasy",
    _id: uuid()
    },
    {
    "title": "Brazil",
    "year": 1982,
    "genre": "sci-fi",
    _id: uuid()
    },
    {
    "title": "The Lives of Others",
    "year": 2011,
    "genre": "historic drama",
    _id: uuid()
    },
    {
    "title": "Emma",
    "year": 1922,
    "genre": "historic drama",
    _id: uuid()
    },
    {
    "title": "Knock Down the House",
    "year": 2019,
    "genre": "documentary",
    _id: uuid()
    }]

// arg 1; Endpoint (mount path)
// arg 2: Callback function with request and response as args, us. w/ .send method on the resp

movieRouter.get("/", (req, res) => {
    res.send(movies)
})

movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find( movie => movie._id === movieId)
    res.send(foundMovie)
})

movieRouter.post("/", (req, res) =>{
    const newMovie = req.body
    newMovie._id = uuid()
    movies.push(newMovie)
    res.send(`Added ${newMovie.title} to the dB`)
})
movieRouter.delete("/:movieId", (req, res)=> {
    const movieId = req.params.movieId
    let movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send(`Successfully deleted movie`)
})
movieRouter.put("/:movieId", (req,res) => {
    const movieId = req.params.movieId
    let movieIndex = movies.find(movie => movie._id === movieId)
    const updatedMovie = Object.assign(movieIndex, req.body)
    res.send(updatedMovie)
})

// movieRouter.route("/") //This way we only have to declare the endpoint "/" once, and we can chain the other requests on too
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) =>{
//         const newMovie = req.body
//         newMovie._id = uuid()
//         movies.push(newMovie)
//         res.send(`Added ${newMovie.title} to the dB`)
//     })

module.exports = movieRouter