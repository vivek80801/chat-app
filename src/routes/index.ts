import express from "express";
import {
	handleGetRequest,
	handlePostRequest,
	handleGetLogin,
	handlePostLogin,
	handleGetLogOut
} from "../controller/services/index";

export const router = express.Router();

router.get("/", handleGetRequest);
router.post("/", handlePostRequest);
router.get("/login", handleGetLogin)
router.post("/login", handlePostLogin)
router.get("/logout", handleGetLogOut)
