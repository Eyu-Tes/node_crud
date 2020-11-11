const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator');

const ProductSchema = new mongoose.Schema({
    productCode: {
        type: String, 
        required: [true, 'This field is required'],
        unique: true,
        maxlength: [5, 'Product code cannot exceed 5 characters'],
        trim: true
    },
    name: {
        type: String, 
        required: [true, 'This field is required'],
        maxlength: [50, 'Name cannot exceed 30 characters'],
        trim: true,
    }, 
    price: {
        type: Number,
        required: [true, 'This field is required'], 
        min: [0, 'Price cannot be a negative value']
    }, 
    quantity: {
        type: Number, 
        required: [true, 'This field is required'],
        min: [1, 'Quantity cannot be less than 1']
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
// apply the uniqueValidator plugin to ProductSchema.
ProductSchema.plugin(uniqueValidator, {message: 'This product code already exists'})

module.exports = mongoose.model('Product', ProductSchema)
