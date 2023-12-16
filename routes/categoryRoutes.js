const express = require('express')
const { getAllcategories, getcategoryById, addNewcategory, updatecategoryById, deletecategory } = require('../controllers/categoryController')
const router = express.Router()

// Get all categories
router.get('/', getAllcategories)

// Get a category
router.get('/:categoryId', getcategoryById)

// Add new category
router.post('/',addNewcategory)

//Update category
router.patch('/:categoryId',updatecategoryById)

// Delete a category
router.delete('/:categoryId', deletecategory)

module.exports = router