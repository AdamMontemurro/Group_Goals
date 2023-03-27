const router = require('express').Router()
const controller = require('../controllers/GroupController')

router.post('/create', controller.createGroup)

module.exports = router