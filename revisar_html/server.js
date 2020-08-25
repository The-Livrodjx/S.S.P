const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

app.listen('8085', (req, res) => {
    console.log('Executando')
})