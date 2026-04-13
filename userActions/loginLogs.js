const logger = require("../utils/logger")

exports.login = async (req,res, next) => {
     try {
    logger.info("Login attempt", {
      email: req.body.email,
      action: "LOGIN",
      ip: req.ip
    })

    return res.json({ message: "Login successful" })
    next()

  } catch (error) {
    logger.error("Login failed", {
      error: error.message
    })

    return res.status(500).json({ message: "Server error" })
  }
    
}