const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')

/* ===== This needs to loaded before other configurations ===== */
// load global varialbes into environment variables (so we could access them through process.env)
dotenv.config({path: './config/config.env'})

// load DB connection
connectDB()

// initialize app
const app = express()

// use HTTP request logger middleware if server is running in development mode
process.env.NODE_ENV === 'development' && app.use(morgan('dev'))

app.get('/', (req, res) => res.redirect('/products'))

// load router
app.use('/products', require('./routes/products'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ...`))
