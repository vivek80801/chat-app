import { Request, Response } from "express";
import { io } from "../../../server";

export const handleGetChat = (req: Request, res: Response) => {
	if (req.user) {
		const { username }: any = req.user;
		io.on("connection", (socket) => {
			socket.on("new-user", (msg) => {
				socket.broadcast.emit("new-user-joined", msg);
			});
			socket.on("chat-message", (msg) => {
				socket.broadcast.emit("chat message", msg);
			});
		});
		res.render("chat", { username: username });
	}
};
