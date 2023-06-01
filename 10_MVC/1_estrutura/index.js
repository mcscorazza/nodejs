import express from 'express'
import exphbs from 'express-handlebars'
import { sequelize } from './db/conn.js'

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.listen(3000)