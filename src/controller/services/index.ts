import { NextFunction, Request, Response } from "express";
import passport from "passport"
import { reqBodyI } from "../../../index";
import {User} from "../Entities/user"

export const handleGetRequest = (req: Request, res: Response) => {
	res.render("index");
};

export const handlePostRequest = (req: Request, res: Response) => {
	const { username, email, password }: reqBodyI = req.body;
	const newUser = new User(username, email, password)
	const isValidUser = newUser.validate();
	if(isValidUser === "valid user"){
		newUser.save()
		res.redirect("/login")
	}else {
		isValidUser.map((error) => {
		console.log(error)
		res.redirect("/")
		})
	}
};

export const handleGetLogin = (req: Request, res:Response) => {
	res.render("login")
}

export const handlePostLogin = (req: Request, res: Response, next: NextFunction) => {
	passport.authenticate("local", {
		failureRedirect: "/login",
		successRedirect: "/chat",
		failureFlash: true,
	})(req, res, next)
}

export const handleGetLogOut = (req: Request, res: Response) => {
	req.logOut()
	res.redirect("/login")
}
