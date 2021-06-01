import { Request, Response } from "express";

export const handleGetChat = (req: Request, res: Response) => {
	if (req.user) {
		const { username }: any = req.user;
		res.render("chat", { username: username });
	} else {
		res.redirect("/login");
	}
};
