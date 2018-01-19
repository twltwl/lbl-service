
const express = require('express')
const app = express()

const logger = require('morgan')
app.use(logger('combined'))

const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const labelRoutes = require('./routes/label-routes')
app.use('/api/v1/', labelRoutes)

app.use('/', (req, res, next) => {
    return res.status(200).json({
        msg: 'Hello, World!'
    })
})

module.exports = app