const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app = express()

// Template Engine
app.set('view engine', 'ejs')

// Middleware...
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/add', (req, res) => {
  res.render('add')
})

app.post('/photos', (req, res) => {
  console.log(req.body)
  res.redirect('/')
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is started at localhost:${port}`)
})
