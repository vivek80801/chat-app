import { PassportStatic } from "passport";
import { Strategy } from "passport-local";

export const myPassport = (passport:PassportStatic) => {
    passport.use(new Strategy((username, password, done) => {
        console.log(`Passport => ${username}, ${password}`);
    }));
};