
const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    author:{
         type:String,
        required:true,
        trim:true
    },
    year:{
        type:Number,
        trim:true
        
    },
    genre:{
         type:String,
        required:true,
        

    },
    sourceUrl:{
          type:String,
        required:true,

    }

}, {timestamps:true})

const book = mongoose.model("Book", bookSchema)
module.exports = book