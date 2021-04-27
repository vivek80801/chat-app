import http from "http";
import { Server } from "socket.io";
import { app } from "./src/app";

const server = http.createServer(app);
const port = process.env.PORT || 5000;
export const io = new Server(server);

server.listen(port);
