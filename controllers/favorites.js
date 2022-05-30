const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('/favorites/index.ejs')
})

router.get('/new', (req, res) => {
    res.render('favorites/new.ejs')
})

module.exports = router