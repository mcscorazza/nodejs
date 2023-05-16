const express = require('express')
const router = express.Router()
const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/add', (req,res) => {
    res.sendFile(`${basePath}/userForm.html`)
})

router.post('/save', (req,res) => {
    console.log(({requestBody: req.body}))
    const name = req.body.name
    const age = req.body.age
    console.log(`O nome do Usuário é ${name} e ele tem ${age} anos.`)
    res.send(`O nome do Usuário é ${name} e ele tem ${age} anos.`)
})

router.get('/:id', (req,res) => {
    const id = req.params.id
    console.log(`Estamos buscando pelo usuario: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router