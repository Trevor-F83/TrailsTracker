require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const trailsController = require('./controllers/trails.js')
const app = express()

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use('/trails', trailsController)

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
