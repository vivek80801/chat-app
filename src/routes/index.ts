import express from "express";
import {
	handleGetRequest,
	handlePostRequest,
} from "../controller/services/index";

export const router = express.Router();

router.get("/", handleGetRequest);
router.post("/", handlePostRequest);
