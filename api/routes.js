const {Router} = require('express')
const IndexController = require('./controllers/indexController')
const TaskController = require('./controllers/taskController')

const router = Router()

router.get('/',IndexController.index)

router.post('/create',TaskController.create)

router.delete('/delete/:id',TaskController.delete)

router.get('/read',TaskController.read)

router.get('/update',TaskController.update)

router.get('/show/:id',TaskController.show)

router.get('/local',TaskController.local)

router.get('/prioridade',TaskController.prioridade)

module.exports = router;    
