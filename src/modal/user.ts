import moongose from "mongoose";

const userSchema = new moongose.Schema({
    username: String,
    email: String,
    password: String,
});
