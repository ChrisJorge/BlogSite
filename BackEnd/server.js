// Import necessary libraries
import express from "express";
import dotenv from "dotenv";
import {connectToDataBase} from "./config/connection.js"

// Initialize Necessary Variables
dotenv.config();
const app = express(); 
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server listening on port number: ${PORT}`)
})

connectToDataBase()

