const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");
const port = process.env.PORT || 8000; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);
server.use(cors());

server.listen(port);