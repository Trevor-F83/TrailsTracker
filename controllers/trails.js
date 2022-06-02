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

router.get('/new', (req, res) => {
    res.render('trails/new.ejs')
})

router.delete('/:id', (req, res) => {
    Trail.findByIdAndRemove(req.params.id, () => {
        res.redirect('/trails')
    })
})

router.put('/:id', (req, res) => {
    Trail.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/trails/${req.params.id}`)
    })
})

router.post('/', (req, res) => {
    Trail.create(req.body, (err, createdTrail) => {
        res.redirect('/trails')
    })
})

router.get('/:id/edit', (req,res) => {
    Trail.findById(req.params.id, (err, foundTrail) => {
        res.render('trails/edit.ejs', {
            trail: foundTrail
        })
    })
})

router.get('/:id', (req, res) => {
    Trail.findById(req.params.id, (err, foundTrail) => {
        res.render('trails/show.ejs', {
            trail: foundTrail
        })
    })
})



module.exports = router