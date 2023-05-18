const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use('/public', express.static('public'))

app.get('/dashboard', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c']

    res.render('dashboard', { items })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: "Aprender Node js",
            category: "JavaScript",
            body: "Esteartigo vai te ajudar a aprender Node.JS...",
            comments: 4
        }, 
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "teste",
            comments: 8
        }
    ]

    res.render("blog", { posts })
})

app.get('/post', (req, res) =>{
    const post = {
        title: "Aprender Node js",
        category: "JavaScript",
        body: "Esteartigo vai te ajudar a aprender Node.JS...",
        comments: 4
    }

    res.render('blogpost', { post })

})


app.get('/', (req, res) =>{
    const user = {
        name: "Marcos",
        surname: "Corazza"
    }
    const palavra = 'Teste'

    const auth = true

    const approved = false

    res.render('home', { user: user, palavra, auth, approved})
})

app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})