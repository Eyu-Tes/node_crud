const express = require('express')

const {getProducts} = require('../controllers/products')

// initialize a router
const router = express.Router()

// @route    GET /products
router.get('/', getProducts)

module.exports = router
