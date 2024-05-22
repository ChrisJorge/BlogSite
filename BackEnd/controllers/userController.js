// Import necessary variables
import {user as User} from "../models/user.js";
import bcrypt from "bcrypt";


export const signup = async (req,res) => {
    try{
        const {userName, email, password} = req.body;
        const hashedPassword = bcrypt.hashSync(password,10);
        const newUser = await User.create({
            userName: userName,
            email: email,
            password: hashedPassword
        });
        console.log('New User Created Successfully!');
        return res.sendStatus(200);
    }
    catch(error)
    {
        if(error.code === 11000)
            {
                console.log('An Account already has that username or email')
            }
        res.statusMessage = "An Account already has that username or email"
        return res.status(401).end()
    };
   
};

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
            console.log('passwords do not match!');
            return res.sendStatus(401);
        }
    console.log('Passwords Match');
    return res.sendStatus(200);
};