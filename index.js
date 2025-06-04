const express = require('express');
const animesRoutes = require('./src/routes/animes');
const userRouter = require('./src/routes/users');
const authRoutes = require('./src/routes/auth')
const bcrypt = require('bcrypt');
require('./src/models')

const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.use(animesRoutes)
app.use(userRouter)
app.use(authRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})

