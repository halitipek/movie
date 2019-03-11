'use strict'

import config from './config/dotenv'
import express from 'express'
import bodyParser from 'body-parser'

import routes from './routes'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(routes)

app.listen(process.env.PORT, () => console.log(`Server is up at port ${process.env.PORT}!`))
