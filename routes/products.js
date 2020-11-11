const express = require('express')

const {getProducts, showAddProduct, addProduct, showEditProduct, editProduct} = require('../controllers/products')

// initialize a router
const router = express.Router()

// @route    GET /products
router.get('/', getProducts)

// @route   GET /products/add
router.get('/add', showAddProduct)

// @route   POST /products/add
router.post('/add', addProduct)

// @route   GET /products/edit/:id
router.get('/edit/:id', showEditProduct)

// @route   POST /products/edit/:id
router.post('/edit/:id', editProduct)

module.exports = router
