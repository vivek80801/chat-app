import { Router } from "express";
import {handleGetChat} from "../controller/services/chat";
import { isAuth } from "../config/auth"

export const chatRouter  = Router();

chatRouter.get("/", isAuth, handleGetChat)
