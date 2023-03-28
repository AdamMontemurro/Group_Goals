const {Task} = require('../models')
const {User} = require('../models')

const CreateTask = async (req,res) => {
  try{
    const { owner} = req.body
    const user = await User.findByPk(owner)
    const task = await Task.create({...req.body})
    res.send(task)
    const currentTasks = user.tasks
    const updatedTasks = [...currentTasks, task.id] 
    //add task to owners task
    await user.update(
      {tasks:updatedTasks},
      {where: {id:owner}, returning:true}
      )
  } catch (error) {
    throw error
  }
}

const RemoveTaskFromUser = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id)
    const { owner} = req.body
    const user = await User.findByPk(owner)
    const currentTasks = [...user.tasks]
    currentTasks.splice(currentTasks.indexOf(taskId),1)
    user.tasks = currentTasks
    user.save()
    res.send()
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
  EditTask,
  RemoveTaskFromUser
}