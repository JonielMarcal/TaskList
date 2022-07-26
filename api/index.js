const express = require('express');
var app = express()

const routes = require('./routes')

app.use(routes)

const PORT = 3000
app.listen(PORT, ()=>console.log(`O servidor pode ser acessado em http://localhost:${PORT}`))