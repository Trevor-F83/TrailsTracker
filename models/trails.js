const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trailSchema = new Schema({
    name: String
}, {
    timestamps: true
})

const Trail = mongoose.model('Trail', trailSchema)

module.exports = Trail