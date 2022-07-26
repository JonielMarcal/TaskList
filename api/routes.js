const {Router} = require('express')
const IndexController = require('./controllers/indexController')
const CreateController = require('./controllers/CreateController')

const router = Router()

router.get('/',IndexController.enviarResposta)

router.post('/create',CreateController.index)

module.exports = router;    
