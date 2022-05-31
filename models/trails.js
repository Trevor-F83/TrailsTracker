const mongoose = require('mongoose')
const Schema = mongoose.Schema

const trailSchema = new Schema({
    name: String,
    length: String,
    difficulty: String,
    poi: String,
    notes: String
}, {
    timestamps: true
})

const Trail = mongoose.model('Trail', trailSchema)

module.exports = Trail