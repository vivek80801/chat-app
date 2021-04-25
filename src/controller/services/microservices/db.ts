import mongoose from "mongoose"

const mongoURI = "mongodb://localhost:27017/chat-app";

export const connectToDB = async () => {
	try{
		await mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology:true})
		console.log("database is connected")
	}catch (err){
		console.log(err)
	}
}
