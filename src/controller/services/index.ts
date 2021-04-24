import { Request, Response } from "express";
import { reqBodyI } from "../../../index";

export const handleGetRequest = (req: Request, res: Response) => {
	res.render("index");
};

export const handlePostRequest = (req: Request, res: Response) => {
	const {username, email, password}:reqBodyI = req.body;
	res.render("login");
};
