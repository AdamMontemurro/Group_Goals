const router = require('express').Router()
const controller = require('../controllers/TaskController')


router.post('/create', controller.CreateTask )
router.put('/:id', controller.EditTask)
router.delete('/:id', controller.DeleteTask)
router.get('/:id', controller.GetUserTasks)

module.exports = router