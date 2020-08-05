const express = require('express')
const toDoRouter = express.Router()
const {uuid} = require('uuidv4')

const todos = [
    {
        "name": "Finish Module 5 up to final project",
        "description": "Plough through all videos and do assignments.",
        "imageUrl": "https://unsplash.com/photos/KCdivsKLuWQ",
        "completed": false,
        "_id": uuid()
    },{
        "name": "Complete group project",
        "description": "Specify projet details, mvp and nice-to-haves,assign areas, make mock-up and design data-flow, submit. Begin work on actual project.",
        "imageUrl": "https://unsplash.com/photos/EbzC__hKci8",
        "completed": false,
        "_id": uuid()
    },{
        "name": "Do Barbara's Google Ads",
        "description": "clarify user profile. research keywords. make ads and check with Barbara. Launch. check everyday for a week.",
        "imageUrl": "https://unsplash.com/photos/ISP7pyvNRz0",
        "completed": false,
        "_id": uuid()
    },{
        "name": "Clean house",
        "description": "Unending task",
        "imageUrl": "https://unsplash.com/photos/Vv45XEMJWZk",
        "completed": false,
        "_id": uuid()
    },
    
]
toDoRouter.route("/")
    .get((req, res)=> {
       res.send(todos)
    })
    .post((req, res) => {
        const newToDo = req.body
        newToDo._id = uuid()
        todos.push(newToDo)
        res.send(`Added ${newToDo.name} to the dB`)
    })
 
toDoRouter.route("/:todoId")
//get one by id
    .get((req, res)=> {
        const todoId = req.params.todoId
        const thisToDo = todos.find(todo => todoId === todo._id)
        res.send(thisToDo)
    })
    .put((req, res)=> {
        const todoId = req.params.todoId
        const thisToDo = todos.find(todo => todoId === todo._id)
        const updatedToDo = Object.assign(thisToDo, req.body)
        res.send(updatedToDo)
    })
    .delete((req, res)=> {
        const todoId = req.params.todoId
        const todoIndex = todos.findIndex(todo => todoId === todo._id)
        todos.splice(todoIndex, 1)
        res.send(`Successfully deleted that item`)
    })

module.exports = toDoRouter
