// Import necessary libraries, variables, and function
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import {connectToDataBase} from "./config/connection.js"
import {user} from "./models/user.js"
import {signup as userSignUp} from "./controllers/userController.js"
import {login as userLogin} from "./controllers/userController.js"

// Initialize Necessary Variables
dotenv.config();
const app = express(); 
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

app.post('/signup', userSignUp)
app.post('/login', userLogin)
app.listen(PORT, () => {
    console.log(`Server listening on port number: ${PORT}`)
})

connectToDataBase()

