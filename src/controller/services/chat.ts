import { Request, Response } from "express"

export const handleGetChat = (req: Request, res: Response) => {
	res.render("chat")
}

