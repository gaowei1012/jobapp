const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const UserRouter = require('./user')


const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', UserRouter)

app.listen(9093, function() {
    console.log('http://localhost:9093')
})