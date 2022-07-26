const {Router} = require('express')
const IndexController = require('./controllers/indexController')
const StatusController = require('./controllers/statusController')
const ContatosController = require('./controllers/contatosController')

const router = Router()

router.get('/',IndexController.enviarResposta)

router.get('/status',StatusController.enviarStatus)

router.get('/contatos',ContatosController.enviarContatos)

module.exports = router;    
