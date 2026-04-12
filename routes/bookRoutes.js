const express = require("express")
const router = express.Router()

const {createBook, getBooks} = require("../controllers/bookControllers")
const protect = require("../middlewares/authMiddlewares")
const adminOnly = require("../middlewares/adminMiddlewares")

router.post("/postBook", protect, adminOnly, createBook)
router.get("/getBooks", protect, getBooks)

module.exports = router