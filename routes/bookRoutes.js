const express = require("express")
const router = express.Router()

const {createBook, getBooks, updateBook, deleteBook} = require("../controllers/bookControllers")
const protect = require("../middlewares/authMiddlewares")
const adminOnly = require("../middlewares/adminMiddlewares")

router.post("/postBook", protect, adminOnly, createBook)
router.get("/getBooks", protect, getBooks)
router.put("/getBooks/:id", protect, adminOnly, updateBook)
router.delete("/delete/:id", protect, adminOnly, deleteBook)

module.exports = router