const express = require('express');
const animesRoutes = require('./src/routes/animes');
const userRouter = require('./src/routes/users');
const authRoutes = require('./src/routes/auth')
const bcrypt = require('bcrypt');
const Sentry = require("./src/config/sentry");
require('./src/models')

const app = express();
const port = 3200;
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.use(animesRoutes)
app.use(userRouter)
app.use(authRoutes)

app.get("/debug", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

Sentry.setupExpressErrorHandler(app);
// app.use(function onError(err, req, res, next) {
//   res.statusCode = 500;
//   res.end(res.sentry + "\n");
// });


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})

