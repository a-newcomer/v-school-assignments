const express = require('express')
const { uuid } = require('uuidv4')
const thingRouter = express.Router()

const thingArray = [
    {
        name: "lobster",
        type: "food",
        price: 200,
        _id: uuid()
    },{
        name: "doublet",
        type: "clothing",
        price: 2500,
        _id: uuid()
    },{
        name: "Letters to Olga",
        type: "book",
        price: 1000,
        _id: uuid()
    },{
        name: "Harry Potter",
        type: "book",
        price: 1500,
        _id: uuid()
    },{
        name: "scarf",
        type: "clothing",
        price: 800,
        _id: uuid()
    },{
        name: "cocounut milk",
        type: "food",
        price: 300,
        _id: uuid()
    },{
        name: "almonds",
        type: "food",
        price: 100,
        _id: uuid()
    }
]

thingRouter.route("/")
    .get((req, res) => {
        res.send(thingArray)
    })
    .post((req, res) => {
        const newThing= req.body
        newThing._id = uuid()
        thingArray.send(newThing)
        res.send(`added ${newThing.name} to the db.`)
    })

thingRouter.route("/:thingId")
    .get((req, res) => {
        const thingId = req.params.thingId
        const foundItem = thingArray.find(thing => thing._id === thingId)
        res.send(foundItem)
    })
thingRouter.route("/search/type")
    .get((req, res) => {
        const type = req.query.type
        const filteredQuery = thingArray.filter(item => item.type === type)
        res.send(filteredQuery)
    })
    //Tried the extra credit here - no luck - can't figure out syntax - the req query is an object, and you need to deconstruct the parameters, and somehow use getAll.
// thingRouter.route("/budget/")
//     .get((req, res) => {
//         const minPrice = req.query.minPrice
//         const maxPrice = req.query.maxPrice
//         const filteredPrice = thingArray.filter(item => item.price < maxPrice && item.price > minPrice )
//         res.send(filteredPrice)
//     })


module.exports = thingRouter
