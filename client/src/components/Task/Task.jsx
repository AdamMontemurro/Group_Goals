import { useState,useEffect } from 'react'
import Client from '../../services/api'

const Task = ({user}) => {

  const userId = localStorage.getItem('user_id')

  const initialState = {
    name: '',
    description:'',
    userId: `${userId}`
  }


const [newTaskForm, setNewTaskForm] = useState(false)
const [formValues, setFormValues] = useState(initialState)
const [userTasks, setUserTasks] = useState([])

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const flipTaskForm= ()=> {
  setNewTaskForm(!newTaskForm)
}

const addTask = async (data) => {
  try {
    const res = await Client.post('/tasks/create', data)
    return res.data
  } catch (error) {
    console.log(error);
    throw error
  }
}

const getUserTasks = async (data) => {
  try {
    const res= await Client.get(`/tasks/${userId}`, data)
    setUserTasks(res.data)
  } catch (error) {
    
  }
}

const onSubmit = (e) => {
  e.preventDefault()
  addTask(formValues)
  setFormValues(initialState)
  flipTaskForm()
}

const deleteTask = async (taskId)=> {
  
  await Client.delete(`/tasks/${taskId}`)

}



useEffect(() => {
  getUserTasks()
}, [userTasks])

  return (
    <div className='main-content'>
      <h1>Current Tasks:</h1>
      <div className='map-area'>
        {userTasks.map((x) => (
          <div className='task-wrapper'>
          <div className='task-container'> 
            <h3>{x.name}</h3>
            <span className='task-description'>Description: {x.description}</span>
          </div>
          <div className='button-container'>
          <button onClick={()=>deleteTask(x.id)} className='task-button'>Delete</button><button className='task-button'>Edit</button>
          </div>
          </div>
        ))}
      </div>
      <div>
        {!newTaskForm ? <button onClick={flipTaskForm} className="statusButton">New Task</button> : null }
        { newTaskForm ? <form onSubmit={onSubmit}>
          <label htmlFor="name">Task Name: </label> <br></br>
            <input
              name="name"
              type="string"
              placeholder="Enter Task Name"
              onChange={handleChange}
              defaultValue={formValues.name}
              required
            />
      <br></br>
          <label htmlFor="description">Task Name: </label> <br></br>
            <input
              name="description"
              type="string"
              placeholder="Enter Brief Description"
              onChange={handleChange}
              defaultValue={formValues.description}
              required
            />
      <br></br>
          <button type="submit" className="statusButton">Add Task</button>
        </form> : null}
      </div>
    </div>
  )
}

export default Task
