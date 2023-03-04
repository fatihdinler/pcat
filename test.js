const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dbUrl = '127.0.0.1:27017'
const dbName = 'pcat-test-db'

// connect DB
mongoose.connect(`mongodb://${dbUrl}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
})

// create model
const Photo = mongoose.model('Photo', PhotoSchema)

// create a photo
// Photo.create({
//   title: 'Photo title 2',
//   description: 'Lorem ipsum pahmus loerask. 2',
// })

// read a photo
// Photo.find().then((item) => {
//   console.log(item)
// })

// update a photo
// const id = '64037e6c3fb9e91c57dd5bcd'
// Photo.findByIdAndUpdate(id, {title : 'Photo title 1 updated'}).then((data => console.log(data)))

// delete a photo
// const id = '64037e6c3fb9e91c57dd5bcd'
// Photo.findByIdAndDelete(id).then(item => console.log(item))