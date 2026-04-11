const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const express = require("express")
const router = express.Router()


// sign up user
router.post("/auth/register", async (req, res) => {
    const {name, username, email, password, role } = await User.create(req.body)

    
    
} )