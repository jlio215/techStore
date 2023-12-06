const express = require('express')
const { mongoConn } = require('./db/connect-mongo')
const dotenv = require('dotenv').config()
const cors = require('cors')

mongoConn()

const app = express()

app.use(express.json())

app.use(cors({
  origin: '*'
}))

module.exports = app