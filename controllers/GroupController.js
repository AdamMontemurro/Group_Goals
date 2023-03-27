const {Group} = require('../models')

const createGroup = async(req,res) => {
  try {
    const { name, owner } = req.body
    const group = await Group.create({ name, owner  })
    res.send(group)
  } catch (error) {
    throw error
  }
}

const AssignMember = async(req,res) => {
  try {
    const { userid,groupid } = req.body
    const group = await Group.findByPk(groupid)
    const currentGroupMembers = group.groupMembers
    const updatedMembers = [...currentGroupMembers, userid] 
    await group.update(
      {groupMembers:updatedMembers},
      {where: {id:groupid}, returning:true}
      )
      res.send(`Added user with id of ${userid} to group with id of ${groupid}`)
  } catch (error) {
    throw error
  }
}



module.exports = {
  createGroup,
  AssignMember

}