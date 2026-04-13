const mongoose = require("mongoose")
const express = require("express")
const app = express()
const dotenv = require("dotenv")
const { error } = require("winston")
const userRoutes = require("./routes/userRoutes")
const bookRoutes = require("./routes/bookRoutes")
const morgan = require("morgan")
const winston  = require("winston")
dotenv.config()


app.use(express.json())

mongoose.connect(   process.env.MONGODB_URI)
.then(() => console.log("Database connected successfully"))
.catch(error => console.log(error.message))

app.use("/api/users", userRoutes)
app.use("/api/books", bookRoutes)
app.use(morgan("dev"))



app.listen(process.env.PORT, ()=>{
    console.log(`http://localhost:${process.env.port}`)
})