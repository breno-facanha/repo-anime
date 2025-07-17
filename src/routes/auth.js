const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const middlewareToken = require('../middlewares/authToken')

router.post('/login', authController.login)
router.get('/profile', middlewareToken.authToken, authController.profile)

module.exports = router