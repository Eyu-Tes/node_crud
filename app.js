const express = require('express')
const dotenv = require('dotenv')

const connectDB = require('./config/db')

/* ===== This needs to loaded before other configurations ===== */
// load global varialbes into environment variables (so we could access them through process.env)
dotenv.config({path: './config/config.env'})

// load DB connection
connectDB()

// initialize app
const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ...`))
