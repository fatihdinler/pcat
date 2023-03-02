const express = require('express')
const path = require('path')

const app = express()

// Middleware...
app.use(express.static('public'))

app.get('/', (req, res) => {
  let file = path.resolve(__dirname, 'temp/index.html')
  res.sendFile(file)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is started at localhost:${port}`)
})