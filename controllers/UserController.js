const {User} = require('../models')
const middleware = require('../middleware')

const Register = async (req, res) => {
  try {
    const { email, password, userName, firstName, lastName } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({ email, password:passwordDigest, userName, firstName, lastName  })
    res.send(user)
  } catch (error) {
    throw error
  }}

  const Login = async (req, res) => {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: { email: email },
        raw: true
      })
      let matched = await middleware.comparePassword(
        user.password,
        password
      )
      if (matched) {
        let payload = {
          id: user.id,
          email: user.email
        }
        let token = middleware.createToken(payload)
        return res.send({ user:payload, token })
      }
      res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
    } catch (error) {
      console.log(error)
      res.status(401).send({ status: 'Error', msg: 'An error has occurred on Login!' })
    }
  }

  module.exports = {
    Register,
    Login
  }