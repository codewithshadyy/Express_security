const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const express = require("express")
const router = express.Router()
const generateToken = require("../controllers/authControllers")


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

    const user = await user.create({
        name,
        email,
        username,
        password,
        role
    })
    }

    const token =generateToken(user)
    return res.status(201).json({
           message: "User registered successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
    })




        
    } catch (error) {

        return res.status(500).json({message:error.message})
        
    }
    
    
} )


module.exports =router