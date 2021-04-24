import express from "express";
import ejsLayout from "express-ejs-layouts";
import passport from "passport";
import { compileSass } from "./lib/scss";
import { router } from "./routes/index";
import { myPassport } from "./config/passport";

export const app = express();

myPassport(passport);
compileSass();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname.replace("/src", "/public")));
app.use(ejsLayout);

app.use("/", router);
