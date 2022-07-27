const {Router} = require('express')
const IndexController = require('./controllers/indexController')
const CreateController = require('./controllers/CreateController')
const ReadController = require('./controllers/ReadController')
const DeleteController = require('./controllers/DeleteController')
const UpdateController = require('./controllers/UpdateController')

const router = Router()

router.get('/',IndexController.index)

router.post('/create',CreateController.create)

router.get('/delete',DeleteController.delete)

router.get('/read',ReadController.read)

router.get('/update',UpdateController.update)

module.exports = router;    
