const {Router} = require('express')
const IndexController = require('./controllers/indexController')
const TaskController = require('./controllers/taskController')

const router = Router()

router.get('/',IndexController.index)

router.post('/create',TaskController.create)

router.get('/delete',TaskController.delete)

router.get('/read',TaskController.read)

router.get('/update',TaskController.update)

module.exports = router;    
