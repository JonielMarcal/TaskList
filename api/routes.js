const {Router} = require('express')

const router = Router()

router.get('/', (req,res)=>{
    res.send('Parabens!')
})

router.get('/status', (req,res)=>{
    res.send({'status':'OK'})
})

router.get('/contatos', (req,res)=>{
    res.send({'contatos':'OK'})
})

module.exports = router;    
