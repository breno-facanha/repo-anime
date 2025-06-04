const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function login(req, res){
     
    const {email, password} = req.body;
    try {
        const user = await Users.findOne({
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).send({
                error: "Usuário não encontrado"
            });
        }

        const matched = await bcrypt.compare(password, user.password);

        if (!matched) {
            return res.status(401).send({
                error: "Senha incorreta"
            });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN} 

        )

        res.status(200).send({token})
        
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
    
}

module.exports = { 
    login
}