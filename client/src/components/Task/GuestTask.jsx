import { useState } from 'react'

const GuestTask = () => {

  const [tasks,setTasks] = useState([])
  const [newTaskForm, setNewTaskForm] = useState(false)

  return (
    <div>
      Guest
      <div>
      {!newTaskForm ? <button className="statusButton">New Task</button> : null }
      </div>
    </div>
  )
}

export default GuestTask
