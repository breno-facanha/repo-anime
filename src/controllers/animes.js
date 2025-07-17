const { Animes } = require('../models');

async function createAnime(req, res){
    const anime = req.body;

    if(req.user.role !== 'admin') {
        return res.status(403).send({
            error: 'Não autorizado'
        });
    }

    try {
        const animeCreated = await Animes.create(anime);
        res.status(201).json(animeCreated);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }

}

async function getAnimes(req, res) {
    try {
       const animes = await Animes.findAll();
        res.status(200).json(animes); 
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createAnime,
    getAnimes
}