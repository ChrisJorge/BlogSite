// Import necessary libraries
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
export const connectToDataBase = async () => {
    await mongoose.connect(process.env.CONNECTIONSTR) // Connecting to the database
    console.log("Connected to the MongoDB")
}

