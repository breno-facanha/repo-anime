const app = require('./src/app');
const http = require('http');
const { Server } = require("socket.io");
const chatSocket = require('./src/sockets/chat');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

const port = process.env.PORT || 3200
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

io.on("connection", (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  chatSocket(io, socket);

  socket.on("disconnect", () => {
    console.log(`Usuário desconectado: ${socket.id}`);
  });
  
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
})

