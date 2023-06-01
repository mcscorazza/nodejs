import express from 'express'
import exphbs from 'express-handlebars'
import { db } from './db/conn.js'

import { Task } from './models/Task.js'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

db
    .sync({force:true})
    .then(() => { 
        app.listen(3000)
    })
    .catch((err) => console.log(err))