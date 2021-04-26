import http from "http";
import { Server } from "socket.io";
import { app } from "./src/app";

const server = http.createServer(app);
const port = process.env.PORT || 5000;
const io = new Server(server)

io.on("connection", (socket) => {
	console.log("user is connected")
	socket.on("chat-message", (msg) =>{
		socket.broadcast.emit("chat message", msg)
	})
})

server.listen(port);
