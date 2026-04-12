const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const express = require("express")
const router = express.Router()
const generateToken = require("../controllers/authControllers")
const loginLimitter = require("../middlewares/loginRateLimit")
logginLimitter = require("../middlewares/loginRateLimit")


// sign up user
router.post("/auth/register", async (req, res) => {
    try {

     const {name, username, email, password, role } = req.body

    userExists = await User.findOne({
        $or:[{email}, {username}]
    })

    if(userExists){
       return  res.status(400).json({
        "message":"user exists"

        })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
        

    const user = await User.create({
        name,
        email,
        username,
        password:hashedPassword,
        role
    })
      const token =generateToken(user)
    return res.status(201).json({
           message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                username:user.username,
                email: user.email,
                role: user.role
            }
    })


    }

   




        
     catch (error) {

        return res.status(500).json({message:error.message})
        
    }
    
    
} )



router.post("/auth/login", loginLimitter, async (req, res) => {

    try {
        const {username, password} = req.body
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).json({
                "message":"invalid credentials"
            }
            )
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch){
           return  res.status(400).json({"message":"invalide login"})
        }

        const token = generateToken(user)

        res.status(200).json({
            message:"login succeesfull",
            token,
            user:{
                id:user._id,
                name:user.name,
                username:user.username,
                email:user.email,
                pasword:user.password,
                role:user.role
                
            }
        })
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
 
    
})

router.get("/users/all", async (req, res) => {
   try {
     const users = await User.find()
    return res.status(200).json(users)
    
   } catch (error) {
    return res.status(500).json({message:error.message})
    
   }
    
})


module.exports =router