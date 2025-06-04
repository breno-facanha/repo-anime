const jwt = require('jsonwebtoken')
require('dotenv').config()


function authToken(req, res, next){
    const token = req.headers.authorization

    if (!token) {
        res.status(401).send({
            error: 'No token provied'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).send({
            error: 'Invalid Token'
        })
    }

}

module.exports = { 
    authToken
}