import express from "express";
import ejsLayout from "express-ejs-layouts";
import {compileSass} from "./lib/scss";

export const app = express();

compileSass();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(__dirname.replace("/src", "/public")));
app.use(ejsLayout)

app.get("/", (req, res) => {
	res.render("index")
})

app.use((req,res) => {
	res.send("404: page not found");
});
