import express from "express";
import ejsLayout from "express-ejs-layouts";
import passport from "passport";
import session from "express-session";
import { config } from "dotenv";
import { resolve } from "path";
import { compileSass } from "./lib/scss";
import { router } from "./routes/index";
import { myPassport } from "./controller/services/microservices/passport";
import { connectToDB } from "./controller/services/microservices/db";
import { chatRouter } from "./routes/chat";

export const app = express();

config({ path: resolve(__dirname + "/.env") });
myPassport(passport);
compileSass();
connectToDB();

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(
	session({
		secret: "my secret",
		resave: false,
		saveUninitialized: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname.replace("/src", "/public")));
app.use(ejsLayout);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);
app.use("/chat", chatRouter);
app.use(
	(
		err: Error,
		req: express.Request,
		res: express.Response,
		next: express.NextFunction
	) => {
		console.error(err.stack);
		res.status(500).render("error");
		next();
	}
);
