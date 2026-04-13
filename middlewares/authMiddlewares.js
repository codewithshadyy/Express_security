const jwt = require("jsonwebtoken")
const User = require("../models/User")

const protect = async (req, res, next) => {
      let token

    console.log("HEADERS:", req.headers.authorization)

    if (req.headers.authorization &&req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("DECODED:", decoded)

        req.user = await User.findById(decoded.id).select("-password")

        next()
    } catch (error) {
        console.log("JWT ERROR:", error.message)
        return res.status(401).json({ message: "Invalid token" })
    }
    
}

module.exports = protect