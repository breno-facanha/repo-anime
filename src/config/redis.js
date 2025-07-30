// configuração do banco de dados Redis
const { createClient } = require('redis');
require('dotenv').config();

const redisClient = createClient({
    url: process.env.REDIS_URL,

});

redisClient.on('error', (err) => {console.error(
    `Erro ao conectar ao Redis: ${err}`); 
})

redisClient.connect()
    .then(() => console.log('Conectado ao Redis com sucesso!'))
    .catch((err) => console.error(`Erro ao conectar ao Redis: ${err}`));

module.exports = redisClient;