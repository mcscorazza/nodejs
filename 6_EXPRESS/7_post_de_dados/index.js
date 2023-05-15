const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded())
app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (res,req) => {
    console.log("AAA", req.body)
})

app.get('/users/:id', (req,res) => {
    const id = req.params.id

    console.log(`Estamos buscando pelo usuario: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () =>{
    console.log("Express rodando na porta 3000!")
})
