import { Router } from "express";
import {handleGetChat} from "../controller/services/chat";

export const chatRouter  = Router();

chatRouter.get("/", handleGetChat)
