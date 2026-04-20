const mongoose = require("mongoose")
const Note = require("../models/Note")
const user = require("../models/User")


exports.createNote  = async (req,res) => {

    try {
        const {title, content} = req.body
        const note = await Note.create({title, content})
        
        return res.status(201).json({"message":`Dear ${Note.creator}, Note ${note.id}  has been taken`})
        
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

exports.getNote = async (req,res) => {
  try {

    const note = await Note.findById(req.params.id)
     if(!note){
        return res.status(404).json({"message":"invalid id"})
    }
    return res.status(200).json(note)
    
  } catch (error) {
    return res.status(500).json({message:error.message})
    
  }
    
}