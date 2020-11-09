const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    ProductCode: {
        type: String, 
        required: true,
        trim: true
    },
    name: {
        type: String, 
        required: true,
        trim: true,
    }, 
    price: {
        type: mongoose.Types.Decimal128, 
        required: true
    }, 
    quantity: {
        type: Number, 
        required: true
    }, 
    category: {
        type: String, 
        enum: ['indoor', 'outdoor'], 
        default: 'indoor'
    }, 
    dateAdded: {
        type: Date, 
        default: Date.now
    }
})

module.exports = mongoose.model('Product', ProductSchema)
