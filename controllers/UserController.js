const {User} = require('../models')
const middleware = require('../middleware')
const { user } = require('pg/lib/defaults')

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

  const UpdatePassword = async (req, res) => {
    try {
      const { oldPassword, newPassword } = req.body
      const user = await User.findByPk(req.params.user_id)
      let matched = await middleware.comparePassword(
        user.password,
        oldPassword
      )
      if (matched) {
        let password = await middleware.hashPassword(newPassword)
        await user.update({ password })
        let payload = {
          id: user.id,
          email: user.email
        }
        return res.send({ status: 'Password Updated!', user: payload })
      }
      res.status(401).send({ status: 'Error', msg: 'Old Password did not match!' })
    } catch (error) {
      console.log(error)
      res.status(401).send({ status: 'Error', msg: 'An error has occurred updating password!' })
    }
  }


  const CheckSession = async (req, res) => {
    const { payload } = res.locals
    res.send(payload)
  }


  const AssignGroup = async(req,res) => {
    try {
      const { userid,groupid } = req.body
      const user = await User.findByPk(userid)
      const currentgroups = user.groups
      const updatedgroups = [...currentgroups, groupid] 
      await user.update(
        {groups:updatedgroups},
        {where: {id:userid}, returning:true}
        )
        res.send()
    } catch (error) {
      throw error
    }
  }


  module.exports = {
    Register,
    Login,
    UpdatePassword,
    CheckSession,
    AssignGroup
  }