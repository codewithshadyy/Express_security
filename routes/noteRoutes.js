
const express = require("express")
const router = express()
const {createNote, getNotes} = require("../controllers/noteController")
const protect = require("../middlewares/authMiddlewares")
const adminOnly = require("../middlewares/adminMiddlewares")


router.post("/take-note", protect,  createNote)
router.get("/get-notes", protect, getNotes)



module.exports = router
