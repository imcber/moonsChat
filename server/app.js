const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const index = require("./routes/index");
const port = process.env.PORT || 4000;
//config server
const app = express();
app.use(index);
//se crea el server
const server = http.createServer(app);
//inicializando socketIO
const io = socketIO(server);

//IO Conection
io.on("connection", (socket) => {
  socket.on("new-message", (data) => {
    io.emit("new-message", data);
  });
  socket.on("disconnect", () => {
    console.log("Alguien abandono la guarida");
  });
});

server.listen(port, () => console.log(`Corriendo en http://localhost:${port}`));
