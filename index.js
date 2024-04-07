const express = require('express')
const app = express()
const path = require('path');
const cookieParser = require('cookie-parser')
const connectDb = require('./config/database')
const shortUrlRouter = require('./routes/short-url')
const PORT = 8000

connectDb()
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/public',express.static(path.join(__dirname, 'public')));

app.use("/",shortUrlRouter)
app.listen(PORT,() => console.log(`Server running on ${PORT}`))