const {Group} = require('../models')
const {User} = require('../models')

const createGroup = async(req,res) => {
  try {
    const { name, owner } = req.body
    const group = await Group.create({ name, owner  })
    res.send(group)
  } catch (error) {
    throw error
  }
}


const AddUser = async(req,res) => {
  try {
    const { groupId, userId} = req.body
    const group = await Group.findByPk(groupId)
    const user = await User.findByPk(userId)
    group.addUser(user)
    res.send(`Added user with id of ${userId} to group with id of ${groupId}`)
  } catch (error) {
    return console.log(error)
  }
}

module.exports = {
  createGroup,
  AddUser

}