// Import necessary libraries, variables, and function
import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { user } from "./models/user.js";
import {connectToDataBase} from "./config/connection.js"
import {signup as userSignUp} from "./controllers/userController.js"
import {login as userLogin} from "./controllers/userController.js"
import {retrieveInfo} from "./controllers/userController.js"
import { updateBio } from "./controllers/userController.js";
import { create as createPost } from "./controllers/postsController.js";
import { updatePost } from "./controllers/postsController.js";
import { deletePost } from "./controllers/postsController.js";
import { fetchPosts } from "./controllers/postsController.js";

// Initialize Necessary Variables
dotenv.config();
const app = express(); 
const PORT = process.env.PORT

app.use(express.json());
app.use(cors());

app.get('/homepage', fetchPosts)
app.post('/signup', userSignUp)
app.post('/login', userLogin)
app.post('/homepage', createPost)
app.get('/profile/:userName', retrieveInfo)
app.put('/profile/:userName', updateBio)
app.put('/profile/:userName/:id/:num', updatePost)
app.delete('/profile/:userName/:id/:num', deletePost)

app.listen(PORT, () => {
    console.log(`Server listening on port number: ${PORT}`)
})

connectToDataBase()

