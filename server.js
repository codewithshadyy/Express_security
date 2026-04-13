// /app building packages
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")

// app routes
const userRoutes = require("./routes/userRoutes")
const bookRoutes = require("./routes/bookRoutes")

// app security packages and modules
const helmet = require("helmet")
const morgan = require("morgan")
const winston  = require("winston")
const accessLogStream =require("./securityInfo/appLogs")
const rateLimiter = require("express-rate-limit")


// enviromental variables conf
dotenv.config()


// json parsing middleware
app.use(express.json())

// database connection
mongoose.connect(   process.env.MONGODB_URI)
.then(() => console.log("Database connected successfully"))
.catch(error => console.log(error.message))









// security settings
app.use(helmet({
    contentSecurityPolicy:false
}))


app.use(morgan("combined", {stream:accessLogStream}))


const limiter = rateLimiter({
    windowMs:15 * 60 * 100,
    max:100
})

app.use(limiter)









//  app routes handling
app.use("/api/users", userRoutes)
app.use("/api/books", bookRoutes)







app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.port}`)
})