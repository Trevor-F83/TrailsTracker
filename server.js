require('dotenv').config()
const express = require('express')
const app = express()
const favoritesController = require('./controllers/favorites.js')
const mongoose = require('mongoose')

app.use('/favorites', favoritesController)

mongoose.connect(process.env.DATABASE_URL, {})

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongodb not running? '))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))    


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => {
    console.log('listening......')
})
