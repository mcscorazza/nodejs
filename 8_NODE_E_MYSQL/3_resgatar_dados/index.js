const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

const app = express()


app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))


app.get('/books', (req,res) => {
    const sql = 'SELECT * FROM books'

    conn.query(sql, (err, data) => {
        if(err) { console.log(err); return}

        const books = data
        console.log(books)
        res.render('books', { books })
    })
})

app.get('/books/:id', (req, res) => {
    const id = req.params.id
    const sql = `SELECT * FROM books WHERE id = ${id}`
    conn.query(sql, (err, data) => {
        if(err) { console.log(err); return}

        const book = data[0]
        console.log(book)
        res.render('book', { book })
    })
})

app.get('/', (req,res) =>{
    res.render('home')
})


app.post('/books/insertbook', (req,res) =>{
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title,pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, (err) => {
        if(err) { console.log(err); return}

        res.redirect('/')
    })
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'corz',
    password: 'corz123',
    database: 'nodemysql',
})

conn.connect((err) =>{
    if(err) { console.log(err);}

    console.log("Conectou ao MySQL!")

    app.listen(3000)

})