const express = require('express')
const router = express.Router()
const postController = require('../controllers/postController')
const verifyJWT = require('../middleware/verifyJWT')
router.route('/')
    .get(postController.getAllPosts)
    .post(verifyJWT ,postController.addNewPost)
    .patch()
    .delete()




module.exports = router