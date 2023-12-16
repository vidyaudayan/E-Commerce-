const express = require('express')
const { getAllProducts, getProductById, addNewProduct, updateProductById, deleteProduct } = require('../controllers/productController')
const router = express.Router()

// Get all products
router.get('/', getAllProducts)

// Get a product
router.get('/:productId', getProductById)

// Add new product
router.post('/', addNewProduct)

//Update product
router.patch('/:productId', updateProductById)

// Delete a product
router.delete('/:productId', deleteProduct)

module.exports = router