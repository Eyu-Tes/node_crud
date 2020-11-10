const express = require('express')

const {getProducts, showAddProduct, addProduct} = require('../controllers/products')

// initialize a router
const router = express.Router()

// @route   GET /products/add
router.get('/add', showAddProduct)

// @route   POST /products
router.post('/', addProduct)

// @route    GET /products
router.get('/', getProducts)

module.exports = router
