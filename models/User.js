
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type:String
    },
    username :{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    email :{
        type:String,
        trim:true,
        unique:true,
        required:true,
        match:[/^\S+@\S+\.\S+$/, "Please use a valid email"]


    },

    password :{
        type:String,
        required:true

    },

  role: {
    type: String,
    enum: ["Admin", "Reader"],
    default: "Reader"
},





},  { timestamps: true })

const User = mongoose.model("User", userSchema)

module.exports = User