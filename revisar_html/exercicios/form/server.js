const express = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('.'))


app.post('/usuarios', (req, res) => {
    console.log(req.body)

    if(req.body.tipo == 'admin') {
        res.send("<h2>possu ser adm ????</h2>")
    }
    else {

        res.send(`<h1>Parabéns ${req.body.nome}, você foi incluso !</h1>`)
    }
})

app.post('/usuarios/:id', (req, res) => {
    
    res.send(`<h1>Parabéns usuário de id=${Number(req.params.id)}</h1>`)
})

app.listen(3003, (req, res) => console.log('blablaa'))