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

    // if(user)
    //     {
    //     console.log(`Adding post to user ${user}`)
    //     user.posts.push(newPost)
    //     console.log('Post Created!!!')
    //     return res.sendStatus(200);
    //     }
    //     return res.sendStatus(401);
    // }
    // catch(error)
    // {
    //     console.log('error')
    //     return res.sendStatus(401);
    // }
    
    // const user = User.findOneAndUpdate({userName},
    //     {$push : {title: newPost.title, body: newPost.body}}

    // )
    // console.log(user);
    // res.sendStatus(201);
    }
    catch(error)
    {
        console.log(error)
        res.sendStatus(400);
    }
    

}