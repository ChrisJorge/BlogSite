// Import necessary libraries
import express from "express";
import dotenv from "dotenv";

// Initialize Necessary Variables
dotenv.config();
const app = express(); 
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server listening on port number: ${PORT}`)
})