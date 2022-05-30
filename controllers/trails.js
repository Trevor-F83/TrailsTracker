const express = require('express')
const router = express.Router()
const Trail = require('../models/trails.js')

router.get('/', (req, res) => {
    Trail.find({}, (err, foundTrails) => {
        res.render('trails/index.ejs', {
            trails: foundTrails
        })
    })
})

router.post('/', (req, res) => {
    Trail.create(req.body, (err, createTrail) => {
        res.redirect('/trails')
    })
})

router.get('/new', (req, res) => {
    res.render('trails/new.ejs')
})

router.get('/:id', (req, res) => {
    Trail.findById(req.params.id, (err, foundTrail) => {
        res.render('trails/show.ejs', {
            trail: foundTrail
        })
    })
})

router.delete('/:id', (req, res) => {
    Trail.findByIdAndRemove(req.params.id, () => {
        res.redirect('/trails')
    })
})

module.exports = router