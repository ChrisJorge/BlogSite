import {user as User} from "../models/user.js";
import { Post } from "../models/post.js";
export const create = async(req,res) => {
    try
    {
    console.log('creating post')
    const{userName,title,body,likes} = req.body;
    const newPost = await Post.create({
        userName: userName,
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

    if(user)
        {
            user.posts[num].title = title;
            user.posts[num].body = body;
            await user.save()
        }

    if(post)
        {
            post.title = title;
            post.body = body;
            await post.save()
        }
    
    
    res.sendStatus(200)
}

export const deletePost = async (req,res) => {
    const postID = req.params.id;
    const userName = req.params.userName

    await Post.findByIdAndDelete(postID);
    const user = await User.findOne({userName})
    for(let i = 0; i < user.posts.length; i++)
        {
            if(user.posts[i]._id == postID)
                {
                    user.posts.splice(i,1);
                    await user.save()
                    break;
                  
                }
        }
    
    res.sendStatus(200);
}