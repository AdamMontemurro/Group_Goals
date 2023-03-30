const router = require('express').Router()
const controller = require('../controllers/GroupController')

router.post('/create', controller.createGroup)
// router.put('/assign',controller.AssignMember)
router.post('/adduser', controller.AddUser)

module.exports = router