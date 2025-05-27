const sequelize = require('../config/database');
const Animes = require('./animes');

sequelize.sync({ force: false })
    .then(() => {
        console.log('Banco de dados sincronizado com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });

module.exports = {
    Animes
};