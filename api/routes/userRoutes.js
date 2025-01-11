const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/userController')
router.route('/')
    .get(userControllers.getAllUsers)
    .post(userControllers.addNewUser)
    .patch()
    .delete()


module.exports = router
