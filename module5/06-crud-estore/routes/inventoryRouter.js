const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')

//Get all
inventoryRouter.get("/", (req, res, next) => {
    Inventory.find((err, inventory)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

//Get one
inventoryRouter.get("/color")

inventoryRouter.post("/", (req, res, next) =>{
    const newInventoryItem = new Inventory(req.body)
    newInventoryItem.save((err, savedInventoryItem) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedInventoryItem)
    })
})
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId},
        (err, deletedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted ${deletedItem.productName}.`)
    })
} )
//update/correct item in db
inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId},
        req.body,//update the objec t with body of the request
        {new: true}, //! send back the updated version!
        (err, updatedItem) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedItem)
        }
    )
})

module.exports = inventoryRouter