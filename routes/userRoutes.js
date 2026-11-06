const express = require("express")
const router = express.Router()
const {register, login, getAll} = require("../controllers/authContoller")
const {loginLimitter} = require("../middlewares/loginRateLimit")


router.post("/register", register)
router.post("/login",loginLimitter, login)
router.get( "/get", getAll)

module.exports = router