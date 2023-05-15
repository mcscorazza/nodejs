const express = require('express')
const app = express()
const port = 3000

const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req,res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

app.post('/users/save', (req,res) => {
    console.log(({requestBody: req.body}))
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do Usuário é ${name} e ele tem ${age} anos.`)
    res.send(`O nome do Usuário é ${name} e ele tem ${age} anos.`)
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
