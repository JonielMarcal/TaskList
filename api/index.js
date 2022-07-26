const express = require('express');
const bodyParser = require('body-parser')
var app = express()

const routes = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

const PORT = 3000
app.listen(PORT, ()=>console.log(`O servidor pode ser acessado em http://localhost:${PORT}`))