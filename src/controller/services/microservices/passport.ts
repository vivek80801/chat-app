import passport from "passport";
import { Strategy } from "passport-local"
import bcrypt from "bcryptjs"
import { User } from "../../../modal/user";

export const myPassport = (passport: passport.PassportStatic) => {
	passport.use(new Strategy((username, password, done) => {
		User.findOne({username: username}).then((user) => {
			if(!user){
				return done("user do not exit", false);
			}else {
				bcrypt.compare(password, user.password, (err, isMatch) => {
					if(err){
						return done(err, false)
					}else if(isMatch){
						return done(null, user)
					}else{
						return done("username and password combination did not match", false)
					}

				})
			}
		}).catch((err) => console.log(err))
	}))
	passport.serializeUser((user:any, done) => {
		done(null, user.id)
	})
	passport.deserializeUser((userId, done) => {
		User.findById(userId).then((user) => {
			if(!user){
				return done("can not find user", false)
			}else {
				return done(null, user)
			}
		}).catch((err) => console.log(err))
	})
}
