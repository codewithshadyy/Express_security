const mongoose = require("mongoose")
const Note = require("../models/Note")


exports.createNote  = async (req,res) => {

    try {
        const {title, content} = req.body
        const note = await Note.create({title, content})
        note.save()
        return res.status(201).json({message:`Note ${note.id} has been created`})
        
    } catch (error) {
        return res.status(500).json({message:message.error})
        
    }
    
}