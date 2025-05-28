const express = require('express')
const router = express.Router();
const userController = require('../controllers/user')
const userMiddleware = require('../middlewares/user')


router.post(
    '/users', 
    userMiddleware.validateCreateUser, 
    userController.createUser
)

module.exports = router