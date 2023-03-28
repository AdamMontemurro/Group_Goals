const router = require('express').Router()
const controller = require('../controllers/TaskController')

router.post('/create', controller.CreateTask )
router.delete('/:id', controller.DeleteTask)
router.put('/:id', controller.EditTask)

module.exports = router