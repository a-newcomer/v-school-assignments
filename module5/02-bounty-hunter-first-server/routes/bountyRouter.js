const express = require('express')
const bountyRouter = express.Router()
const {uuid} = require('uuidv4')
//const bounties = require('./../bounties')

let bounties = [
    {
        firstName: "Padme",
        lastName: "Amidala",
        price: 900,
        alive: false,
        type: "unknown",
        _id: uuid()
    },
    {
        firstName: "The Child,",
        lastName: "aka Baby Yoda",
        price: 1000,
        alive: true,
        type: "neither",
        _id: uuid()
    },
    {
        firstName: "Ashoka",
        lastName: "Tano",
        price: 50,
        alive: true,
        type: "jedi",
        _id: uuid()
    },
    {
        firstName: "Han",
        lastName: "Solo",
        price: 120,
        alive: true,
        type: "neither",
        _id: uuid()
    },
    {
        firstName: "Ziro",
        lastName: "the Hutt",
        price: 45,
        alive: true,
        type: "neither",
        _id: uuid()
    }
]

bountyRouter.get("/",(req, res) => {
    res.status(200)
    res.send(bounties)
})
//enter this query string in postman or front-end for below: type?type=chosenType
bountyRouter.get("/type", (req, res, next)=> {
    const type = req.query.type
    if(!type){
        const error = new Error("No type. Did you enter the type?")
        res.status(500)
        return next(error)
    }
    let chosenByType = bounties.filter(bounty => type === bounty.type)
    res.status(200).send(chosenByType)
})
//get one movie
bountyRouter.get("/:bountyId", (req, res, next)=> {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bountyId === bounty._id)
    if(!foundBounty) {
        const error = new Error('The item was not found')
        res.status(500)
        return next(error)
    }
    res.send(foundBounty)
})
bountyRouter.post("/", (req, res) => {
    const newBounty = req.body
    newBounty._id = uuid()
    bounties.unshift(newBounty)
    //console.log(req)
    res.status(201).send(newBounty)
})
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bountyId === bounty._id)
    //const bountyName = bounties[bountyIndex].firstName
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully deleted bounty.`)
})
bountyRouter.put("/:bountyId", (req, res, next) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bountyId ===bounty._id)
    const updatedBounty = Object.assign(foundBounty, req.body)
    res.status(201).send(updatedBounty)
    next()
})

module.exports = bountyRouter