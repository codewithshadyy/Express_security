
const expressRateLimit = require("express-rate-limit")

const loginLimitter =expressRateLimit({
    windowMs:15 * 60 * 1000,
    max:5,
    message: {
        message: "Too many login attempts. Try again in 15 minutes."
    },
    standardHeaders:true,
    legacyHeaders: false

})

module.exports = loginLimitter