const express = require('express');
var app = express()

app.get('/', (req,res)=>{
    res.send('Parabens!')
})
app.get('/status', (req,res)=>{
    res.send({'status':'OK'})
})
const PORT = 3000
app.listen(PORT, ()=>console.log(`O servidor pode ser acessado em http://localhost:${PORT}`))