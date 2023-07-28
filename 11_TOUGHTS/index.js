import express from 'express'
import exphbs from 'express-handlebars'
import session from 'express-session'
import flash from 'express-flash'
import { conn } from './db/conn.js'
import FileStore from 'session-file-store'
import path from 'path'
import os from 'os'

const fs = FileStore(session)

import { Tought } from './models/Tought.js'
import { User } from './models/User.js'
import { toughtsRoutes } from './routes/toughtsRoutes.js'
import { authRoutes } from './routes/authRoutes.js'


import ToughtController from './controllers/ToughtsController.js'


const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//receber resposta do post-body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(
  session({
    name:"session",
    secret: "nosso_secret",
    resave: false,
    saveUninitialized: false,
    store: new fs({
      logFn: function() {},
      path: path.join(os.tmpdir(), 'sessions')
    }),
    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true
    }
  })
)


app.use(flash())
app.use(express.static('public'))

app.use((req,res, next) => {
  if(req.session.userid) {
    res.locals.session = req.session
  }

  next()
})

//Routes
app.use('/toughts', toughtsRoutes)
app.use('/',authRoutes)
app.get('/', ToughtController.showToughts)

conn
  .sync({
    //force: true 
  })
  .then(() => { 
    app.listen(3000)
  })
  .catch((err) => console.log(err))