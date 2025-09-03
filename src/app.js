const express = require('express');
const animesRoutes = require('./routes/animes');
const dotenv = require('dotenv');
dotenv.config();
const userRouter = require('./routes/users');
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');
const Sentry = require("./config/sentry");
require('./models')

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.use(animesRoutes)
app.use(userRouter)
app.use(authRoutes)
app.use(messagesRoutes)

Sentry.setupExpressErrorHandler(app);

module.exports = app;
