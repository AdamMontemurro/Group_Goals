const router = require('express').Router()
const controller = require('../controllers/TaskController')
const middleware = require('../middleware')


router.post('/create', controller.CreateTask )
router.put('/:id', controller.EditTask)

router.delete('/:id',
middleware.stripToken,
middleware.verifyToken, 
controller.DeleteTask)

router.get('/:id', 
middleware.stripToken,
middleware.verifyToken,
controller.GetUserTasks)

module.exports = router