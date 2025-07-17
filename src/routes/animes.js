const express = require('express');
const router = express.Router();
const animesCOntroller = require('../controllers/animes');
const middlewareToken = require('../middlewares/authToken')

router.post('/animes', middlewareToken.authToken, animesCOntroller.createAnime)
router.get('/animes', middlewareToken.authToken, animesCOntroller.getAnimes);

module.exports = router;