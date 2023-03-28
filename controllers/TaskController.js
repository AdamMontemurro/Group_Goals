const {Task} = require('../models')
const {User} = require('../models')

const CreateTask = async (req,res) => {
  try{
    const task = await Task.create({...req.body})
    res.send(task)
  } catch (error) {
    throw error
  }
}

const DeleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Task Removed', payload: req.params.id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}


const EditTask = async (req, res) => {
  try {
    const task = await Task.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(task)
  } catch (error) {
    throw error
  }
}

const GetUserTasks = async (req,res) => {
  try {
    const {userid} = req.body
    const user = await User.findByPk(userid)
    const userTasks = [...user.tasks]
    res.send(userTasks)

  } catch (error) {
    throw error
  }
}

module.exports = {
  CreateTask,
  DeleteTask,
  GetUserTasks,
  EditTask
}