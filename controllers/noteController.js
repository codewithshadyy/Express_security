const mongoose = require("mongoose")
const Note = require("../models/Note")


exports.createNote  = async (req,res) => {

    try {
        const {title, content} = req.body
        const note = await Note.create({title, content})
        
        return res.status(201).json({"message":`Note ${note.id} has been taken`})
        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
    
}

exports.getNotes = async (req, res) => {
    try {
        const notes = await Note.find()
        res.status(200).json(notes)

        
    } catch (error) {
        return res.status(500).json({message:error.message})
        
    }
    
}