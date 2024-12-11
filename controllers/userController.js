const users = require("../models/userModel")
const jwt = require('jsonwebtoken')

// Register
exports.registerController = async (req,res)=>{
    console.log("Inside registerController");
    const {username,email,password} = req.body
    console.log(username,email,password);
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(200).json("User Already Existing ... please login")

        }else{
            const newUser = new users({
                username,email,password,github:"",linkedin:"",profilePic:""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        

    }catch(err){
        res.status(401).json(err)

    }
    
   
}

// login

exports.loginController = async (req,res)=>{
    console.log("inside loginController");
    const {email,password} = req.body
    try{
        const existingUser = await users.findOne({email,password})
        if(existingUser){
            // token generate
            const token = jwt.sign({userId:existingUser._id},process.env.JSWTPASSWORD)
            res.status(200).json({
                user:existingUser,
                token
            })
        }else{
            res.status(404).json("Invalid Email/password")
        }


    }catch(err){
        console.log(err);
        

    }
    
}