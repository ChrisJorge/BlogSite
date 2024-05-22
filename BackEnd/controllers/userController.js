// Import necessary variables
import {user as User} from "../models/user.js";
import bcrypt from "bcrypt";


export const signup = async (req,res) => {
    const {userName, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password,10);

    try{
        const newUser = User.create({
            userName: userName,
            email: email,
            password: hashedPassword
        });
        return res.sendStatus(200);
    }
    catch(e)
    {
        return res.sendStatus(401)
    };
   

    console.log('New User Created Successfully!');
}

export const login = async (req,res) => {
    const{userName, password} = req.body;

    const user = await User.findOne({userName});
    if(!user)
        {
            console.log('User could not be found');
            return res.sendStatus(401);
        };
    console.log('User Found!');
    const validatePassword = bcrypt.compareSync(password, user.password);
    if(!validatePassword)
        {
            console.log('passwords do not match!')
            return res.sendStatus(401)
        }
    res.sendStatus(200)
    console.log('Passwords Match')
}