// Import necessary variables
import {user} from "../models/user.js"
import bcrypt from "bcrypt"


export const signup = async (req,res) => {
    const {userName, email, password} = req.body
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password
    const hashedPassword = bcrypt.hashSync(password,10)

    try{
        const newUser = user.create({
            userName: userName,
            email: email,
            password: hashedPassword
        })
        res.sendStatus(200)
    }
    catch(e)
    {
        console.log(e)
    }
   

    console.log('New User Created Successfully!')
}