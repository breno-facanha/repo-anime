const express = require('express');
const animesRoutes = require('./src/routes/animes');
require('./src/models')
const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.use(animesRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})

