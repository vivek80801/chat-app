import mongoose from "mongoose";

const mongoURI = process.env.MONGOURI || "mongodb://localhost:27017/chat-app";

export const connectToDB = async () => {
	try {
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log(`database is connected on ${mongoURI}`);
	} catch (err) {
		console.log(err);
	}
};
