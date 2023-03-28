const router = require('express').Router()
const controller = require('../controllers/TaskController')

router.post('/create', controller.CreateTask )
router.put('/remove/:id', controller.RemoveTaskFromUser)
router.put('/:id', controller.EditTask)
router.delete('/:id', controller.DeleteTask)

module.exports = router