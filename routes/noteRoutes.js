
const express = require("express")
const router = express()
const {createNote, getNotes, getNote, updateNote} = require("../controllers/noteController")
const protect = require("../middlewares/authMiddlewares")
const adminOnly = require("../middlewares/adminMiddlewares")


router.post("/take-note", protect,  createNote)
router.get("/get-notes", protect, getNotes)
router.get("/get-notes/:id",protect, getNote)
router.put("/update-note/:id", protect, updateNote)



module.exports = router
