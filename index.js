const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bookController = require('./controllers/books')
const app = express()

// Routes
app.use('/books', bookController)
app.use(express.json())

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening quietly on port 8080`))