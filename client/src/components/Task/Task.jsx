import { useState,useEffect } from 'react'
import Client from '../../services/api'

const Task = ({user}) => {

  const userId = localStorage.getItem('user_id')

  const initialState = {
    name: '',
    description:'',
    userId: `${userId}`
  }

const [editTaskForm, setEditTaskForm] = useState(false)
const [editFormValues, setEditFormValues] = useState(initialState)
const [newTaskForm, setNewTaskForm] = useState(false)
const [formValues, setFormValues] = useState(initialState)
const [userTasks, setUserTasks] = useState([])
const [taskEditId, setTaskEditId] = useState('')

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const handleEditChange = (e) => {
  setEditFormValues({...editFormValues, [e.target.name]: e.target.value})
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

const editTask = async (taskId, data)=> {
  await Client.put(`/tasks/${taskId}`, data)
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
  getUserTasks()
}

const handleEditCick =(x)=> {
  setEditTaskForm(true)
  setTaskEditId(x)
  
}

const handleEditSubmit = async (e)=> {
  e.preventDefault()
  editTask(taskEditId, editFormValues)
  setEditFormValues(initialState)
  setEditTaskForm(false)
  getUserTasks()
  

}

const deleteTask = async (taskId)=> {
  
  await Client.delete(`/tasks/${taskId}`)
  getUserTasks()

}

const cancelEdit = () => {
  setEditTaskForm(false )
  setTaskEditId('')
}

useEffect(() => {
  getUserTasks()
}, [])

  return (
    <div className='main-content'>
      <h1>Current Tasks:</h1>
      <div className='map-area'>
        {userTasks.map((x) => (
          <div className='task-wrapper' key={x.id} >
          <div className='task-container'> 
            <h3>{x.name}</h3>
            <span className='task-description'>Description: {x.description}</span>
          </div>
          <div className='button-container'>
          <button onClick={()=>deleteTask(x.id)} className='task-button'>Delete</button><button onClick={()=>handleEditCick(x.id)} className='task-button'>Edit</button>
          </div>
          </div>
        ))}
      </div>
      <div className='task-forms'>
        {!newTaskForm ? <button onClick={flipTaskForm} className="statusButton new-task">New Task</button> : null }
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
          <label htmlFor="description">Task Description: </label> <br></br>
            <input
              name="description"
              type="string"
              placeholder="Enter Brief Description"
              onChange={handleChange}
              defaultValue={formValues.description}
              required
            />
      <br></br>
          <div className="cancelButton" onClick={flipTaskForm}> Cancel</div>
          <button type="submit" className="statusButton">Add Task</button>
        </form> : null}
        {editTaskForm ? 
        <form onSubmit={handleEditSubmit}>
          <label htmlFor="name">Edited Name: </label> <br></br>
            <input
              name="name"
              type="string"
              placeholder="Enter Task Name"
              onChange={handleEditChange}
              defaultValue={editFormValues.name}
              required
            />
      <br></br>
          <label htmlFor="description">Edited Description: </label> <br></br>
            <input
              name="description"
              type="string"
              placeholder="Enter Brief Description"
              onChange={handleEditChange}
              defaultValue={editFormValues.description}
              required
            />
      <br></br>
          <div className="cancelButton" onClick={cancelEdit}> Cancel</div>
          <button type="submit" className="statusButton">Submit Edit</button>
          
        </form> : null }
      </div>
    </div>
  )
}

export default Task
