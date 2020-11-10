const Product = require('../models/Product')

// @desc    get all products
module.exports.getProducts = async (req, res) => {
    const products = await Product.find().lean()
    res.render('products/index', {
        products
    })
}

// @desc    show add product form
module.exports.showAddProduct = (req, res) => {
    res.render('products/add')
}

// @desc    process add product form
module.exports.addProduct = async (req, res) => {
    try {
        console.log(req.body)
        await Product.create({...req.body})
        res.redirect('/')
    } catch (err) {
        console.log(err) 
        res.render('products/add', {
            ...req.body
        })
    }
}
