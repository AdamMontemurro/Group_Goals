const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

//Login/Reg
router.post('/register', controller.Register)
router.post('/login', controller.Login)

//Update Password:
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)

//Check Session:
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

//Assign a group to a user
router.put('/assign', controller.AssignGroup)


module.exports = router