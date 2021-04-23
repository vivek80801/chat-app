import express from "express";
import ejsLayout from "express-ejs-layouts";
import { compileSass } from "./lib/scss";
import { router } from "./routes/index";

export const app = express();

compileSass();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname.replace("/src", "/public")));
app.use(ejsLayout);

app.use("/", router);
