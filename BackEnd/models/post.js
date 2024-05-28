import mongoose from "mongoose";
export const postSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
        },
        title:
        {
            type: String,
            required: true,
        },
        body:
        {
            type: String,
            required: true,
        },
        likes: {
            type: Number,
        },
    });

export const Post = mongoose.model('Post', postSchema);