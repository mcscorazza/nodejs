import express from 'express'
import exphbs from 'express-handlebars'
import { conn } from './db/conn.js'

import {User} from './models/User.js'

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




app.get('/', (req,res) =>{
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => {
    console.log(err)
})