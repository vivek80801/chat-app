import {myError} from "./error"
import {saveUserToDatabase} from "../services/microservices/user";

export class User {
	username: string;
	email: string;
	password: string;
	constructor(username: string, email: string, password: string) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
	 validate() {
		 const newError = new myError()
		 if(this.username.length < 5){
			 newError.add("Username must be greater than 5 charecters")
		 }else if(this.username.length > 15){
			 newError.add("Username must be smaller than 15 charecters")
		 }else if(this.password.length < 5){
			 newError.add("Password must be greater than 5 charecters")
		 }else if(this.password.length > 15) {
			 newError.add("Password must be smaller than 15 charecters")
		 }
		 if(newError.length > 0){
			 return newError.errors;
		 }else{
			 return "valid user"
		 }
    }
    save(){
	    saveUserToDatabase(this.username, this.email, this.password)
    }
    
}
