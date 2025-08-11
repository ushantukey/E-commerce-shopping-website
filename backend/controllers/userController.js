import validator from "validator";
import bycrt from "bcrypt";
import jwt from 'jsonwebtoken';
import userModel from "../models/userModel.js"



const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req,res) =>{
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success: false, message:"User doesn't exists"})
        }

        const isMatch = await bycrt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({sucess:true,token})
        }
        else{
            res.json({success:false, message: 'Invalid credentails'})
        }

    

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
    }
}

//Route for user register

const registerUser = async(req,res) =>{
    try {
        const {name, email, password} = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success: false, message:"User already exists"})
        }

        //validating email format and strong password

        if (!validator.isEmail(email)) {
            return res.json({success: false, message:"Please enter a valid email"})
        }

        if (password.length < 8) {
            return res.json({success: false, message:"Please enter a strong password"})
        }

        //hashing user password

        const salt = await bycrt.genSalt(10)
        const hashedPassword = await bycrt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        }) 

        const user = await newUser.save()

        const token =  createToken(user._id)

        res.json({sucess:true, token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

// Route for admin login

const adminLogin = async (req,res) => {

}

export {loginUser, registerUser, adminLogin}