const { Users} = require('../models')


async function createUser(req, res) {

     /*
            #swagger.tags = ['Users']
            #swagger.summary = 'Returns a user by id'
            #swagger.description = 'This endpoint will return a user by id...'
        */
    
    try {
        await Users.create(req.body)

        return res.status(201).send("Usuário criado com sucesso")
    } catch (error) {
        return res.status(500).send({
            error: error.message
        })
        
    }
}

module.exports = {
    createUser
}