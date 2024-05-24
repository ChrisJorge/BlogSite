// Import necessary Libraries
import mongoose from "mongoose";
import { postSchema } from "./post.js";
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [postSchema],
    bio: {
        type: String
    }
});

export const user = mongoose.model("User", userSchema);