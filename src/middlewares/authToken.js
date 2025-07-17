const jwt = require('jsonwebtoken')
const { Users } = require('../models')
require('dotenv').config()


async function authToken(req, res, next){
    const token = req.headers.authorization

    if (!token) {
        res.status(401).send({
            error: 'No token provied'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await Users.findOne({
            where: {
                id: decoded.id,
            }
        })

        if (!user) {
            return res.status(401).send({
                error: 'Invalid Token'
            })
        }

        req.user = user

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