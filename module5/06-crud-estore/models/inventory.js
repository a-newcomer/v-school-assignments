const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Inventory blueprint/schema
const InventorySchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true,
        enum: ["XS", "S", "M", "L", "XL"]
    },
    color: {
        type: String,
        required: false
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

module.exports = mongoose.model("Inventory", InventorySchema)