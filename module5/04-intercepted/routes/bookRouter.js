const express = require('express')
const bookRouter = express.Router()
const {uuid} = require('uuidv4')
const books = [
    {
        name: "The Longevity Kitchen",
        genre: "cookbook",
        author: "Rebecca Katz",
        date: 2011,
        inStock: true,
        _id: uuid()
    },{
        name: "The Lathe of Heaven",
        genre: "sci-fi",
        author: "Ursula K. LeGuin",
        date: 1981,
        inStock: true,
        _id: uuid()
    },{
        name: "Letters to Olga",
        genre: "philosophy",
        author: "Vaclav Havel",
        date: 1982,
        inStock: false,
        _id: uuid()
    },{
        name: "Harry Potter",
        genre: "fantasy",
        author: "J.K. Rowling",
        date: 2000,
        inStock: true,
        _id: uuid()
    },{
        name: "The Classic Italian Cookbook",
        genre: "cookbook",
        author: "Marcella Hazan",
        date: 2002,
        inStock: true,
        _id: uuid()
    },{
        name: "The Tombs of Atuan",
        genre: "fantasy",
        author: "Ursula K. LeGuin",
        date: 1978,
        inStock: false,
        _id: uuid()
    },{
        name: "Capital",
        genre: "philosophy",
        author: "Karl Marx",
        date: 1867,
        inStock: true,
        _id: uuid()
    }
]

bookRouter.route('/')
    .get((req,res, next) => {
     req.body = [...books,{
        name: "Wizard of Oz",
        genre: "fantasy",
        author: "L. Frank Baum",
        date: 1906,
        inStock: false,
        _id: uuid()
    } ]
    console.log('Get request sent.Middleware Used.') 
      next()  
    })
module.exports = bookRouter
