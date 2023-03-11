const express = require('express')
const mongoose = require('mongoose')
const Photo = require('./models/Photo')

const app = express()

// Template Engine
app.set('view engine', 'ejs')

// connect DB
const dbUrl = '127.0.0.1:27017'
const dbName = 'pcat'
mongoose.connect(`mongodb://${dbUrl}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Middleware...
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routing
app.get('/', async (req, res) => {
  const photos = await Photo.find()
  res.render('index', {
    photos: photos,
  })
})

app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('photo', {
    photo: photo
  })
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.post('/photos', async (req, res) => {
  await Photo.create(req.body)
  console.log(req.body)
  res.redirect('/')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is started at localhost:${port}`)
})
