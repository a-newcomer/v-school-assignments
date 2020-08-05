const { uuid } = require("uuidv4");

const uuid = require('uuidv4')


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
        firstName: "Baby Yoda",
        lastName: "The Child",
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
        lastName: "The Hutt",
        price: 45,
        alive: true,
        type: "neither",
        _id: uuid()
    }
]
module.exports = bounties