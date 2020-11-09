const express = require('express')

// initialize a router
const router = express.Router()

// @desc     show all products
// @route    GET /products
router.get('/', (req, res) => res.send('<h1>NodeJS Crud</h1>'))

module.exports = router
