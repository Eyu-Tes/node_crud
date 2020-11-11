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
        const newProduct = new Product({...req.body})
        let error = newProduct.validateSync()
        if(error) throw(error)
        await newProduct.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.render('products/add', {
            ...req.body, 
            error
        })
    }
}

// @desc    show edit product form
module.exports.showEditProduct = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).lean()
        res.render('products/edit', {
            ...product
        })
    } catch (error) {
        console.log(error)
        res.render('error/404')
    }
}

// @desc    process edit product form
module.exports.editProduct = async (req, res) => {
    const id = req.params.id
    try {
        const updatedProduct = await Product.findOneAndUpdate({_id: id}, req.body, {
            // return the modified document rather than the original
            new: true,
            // runs validators 
            runValidators: true,
            // prevents the error: Cannot read property 'ownerDocument' of null
            // lets you set the value of 'this' in update validators to the underlying query.
            context: 'query'
        })
        let error = updatedProduct.validateSync()
        if(error) throw(error)
        res.redirect('/')
    } catch (error) {
        res.render('products/edit', {
            ...req.body, 
            // _id must be passed since req.body will not contain it
            _id: id, 
            error
        })
    }
}

// @desc    show remove product confirmation form
module.exports.showRemoveProduct = async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params.id}).lean()
        res.render('products/remove', {
            ...product
        })
    } catch (error) {
        console.log(error)
        res.render('error/404')
    }
}

// @desc    process remove product form
module.exports.removeProduct = async (req, res) => {
    try {
        await Product.deleteOne({_id: req.params.id})
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}
