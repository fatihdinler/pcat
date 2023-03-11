const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Schema
const PhotoSchema = new Schema({
  title: String,
  message: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
})

// Model
const Photo = mongoose.model('Photo', PhotoSchema)

// Exports Photo model
module.exports = Photo