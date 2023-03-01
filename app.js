const express = require('express')

const app = express()

app.get('/', (req, res) => {

  const photo = {
    id : 1,
    name : 'Car photo',
    description : 'This is an excelent car photo.'
  }

  res.send(photo)
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is started at localhost:${port}`)
})