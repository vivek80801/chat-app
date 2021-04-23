import { Request, Response } from "express";

export const handleGetRequest = (req: Request, res: Response) => {
	res.render("index");
};

export const handlePostRequest = (req: Request, res: Response) => {
	console.log(req.body);
	res.render("login");
};
