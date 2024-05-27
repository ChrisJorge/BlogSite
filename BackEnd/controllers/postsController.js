import {user as User} from "../models/user.js";
import { Post } from "../models/post.js";
export const create = async(req,res) => {
    try
    {
    console.log('creating post')
    const{userName,title,body,likes} = req.body;
    const newPost = await Post.create({
        title: title,
        body: body,
        likes: likes
    })

    console.log('Post Created!')
    const user = await User.findOne({userName})
    console.log(user.posts)
    if(user)
        {
            user.posts.push(newPost)
            console.log(user.posts)
            res.sendStatus(200)
            await user.save()
            console.log(user)
        }
    }
    catch(error)
    {
        console.log(error)
        res.sendStatus(400);
    }
    
}

export const updatePost = async (req,res) => {
    const postID = req.params.id;
    const num = req.params.num
    const userName = req.params.userName
    const {title, body} = req.body
    console.log(userName)
    const user = await User.findOne({userName})
    const post = await Post.findById(postID)

    user.posts[num].title = title;
    user.posts[num].body = body;

    post.title = title;
    post.body = body;
    
    await user.save()
    await post.save()
    res.sendStatus(200)
}