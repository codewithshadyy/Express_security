
const express = require("express")
const router = express()
const {createNote, getNotes} = require("../controllers/noteController")
const protect = require("../middlewares/authMiddlewares")
const adminOnly = require("../middlewares/adminMiddlewares")

router.post("/take-note", createNote)
router.get("/get-notes", getNotes)



module.exports = router
