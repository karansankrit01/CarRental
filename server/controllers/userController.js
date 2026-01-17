import User from "../model/User.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// generate jwt token
const generateToken = (userId)=>{
    return jwt.sign({userId}, process.env.JWT_SECRETS);
}

// register user
export const registerUser = async (req, res)=>{
    try {
        const {name,email,password} = req.body
        if(!name || !email || !password || password.length<8){
            return res.json({success : false, message :"Fill all the required fields "})
        }
        const userExist = await User.findOne({email})
        if(userExist){
            return res.json({success :false ,message : "User already exists"})
        }
        const handlePassword = await bcrypt.hash(password,10)
        const user = await User.create({name, email, password: handlePassword})

        const token = generateToken(user._id.toString())
        res.json({success : true, token})
    } catch (error) {
        console.log(error.message);
        res.json({success:false, message :error.message})
    }
}

// Login user
export const loginUser = async(req,res)=>{
    try {
        const {email, password}= req.body
        const user= await User.findOne({email})
        if(!user){
            return res.json({success: false , message : "user not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.json({success: false , message : "Invalid Credentials"})
        }
        const token = generateToken(user._id.toString())
        res.json({success : true, token})

    } catch (error) {
        console.log(error.message);
        res.json({success:false, message :error.message})
    }
}

// Get user data using JWT token
export const getUserData= async (req,res)=>{
    try {
        const {user} = req;
        Response.json({success : true, user})
    } catch (error) {
        console.log(error.message);
        res.json({success:false, message :error.message})
    }
}

