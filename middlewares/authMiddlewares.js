const jwt = require("jsonwebtoken")
const User = require("../models/User")

exports.protect = async (req, res) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return res.status(401).json({"message":"Authorized no token provided"})
    }
    try {
        const decoded  = jwt.verify(token, process.env.SECRET_KEY)
        req.user = await User.findOne(decoded.id).select("-password")
        next()
        
    } catch (error) {
        res.status(401).json({"message":"invalid token"})
        
    }
    
}