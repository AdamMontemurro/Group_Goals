const router = require('express').Router()
const controller = require('../controllers/GroupController')

router.post('/create', controller.createGroup)
router.put('/assign',controller.AssignMember)

module.exports = router