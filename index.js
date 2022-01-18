require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.MONGO_CONECT)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.get('/cadastro', (req, res) => {
  return res.render('create')
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server runing on port ${port}`)
})