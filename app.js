const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

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

// handlebars helpers
const {setChecked} = require('./routes/helpers/hbs')

// register handlebars view engine (with .hbs extension instead of '.handlebars')
app.engine('.hbs', exphbs({
    helpers: {setChecked},
    extname: '.hbs'})
)
app.set('view engine', '.hbs')

// body parser middleware
// get request body form a form
app.use(express.urlencoded({extended: false}))
// get request body from a json (eg. from Postman)
app.use(express.json())

app.get('/', (req, res) => res.redirect('/products'))

// load router
app.use('/products', require('./routes/products'))

// set static folder (css, js, img ...)
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ...`))
