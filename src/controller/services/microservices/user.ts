import { User } from "../../../modal/user";
import bcrypt from "bcryptjs";

export const saveUserToDatabase = (username: string, email: string, password: string) => {
	User.findOne({username: username}).then((user) => {
		if(user){
			console.log("user already exits");
		}else{
			const newUser = new User({
				username,
				email,
				password,
			})
			bcrypt.genSalt(10, (err, salt) => {
				if(!err){
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if(err){
						console.log(err)
					}else{
						newUser.password = hash;
						newUser.save().then((user) => {
						}).catch((err) => console.log(err))
					}
				})
				}
			})
		}
	}).catch((err) => console.log(err))
}
