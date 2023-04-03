import { useState } from 'react'

const GuestTask = ({tasks,setTasks,removeTask}) => {

  const initialState = {
    name: '',
    description:'',
  }

  const [newTaskForm, setNewTaskForm] = useState(false)
  const [formValues, setFormValues] = useState(initialState)


  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const flipTaskForm= ()=> {
    setNewTaskForm(!newTaskForm)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setTasks([...tasks,formValues])
    setFormValues(initialState)
    flipTaskForm()
  }

  const handleDelete = (x) =>{
    removeTask(x)
  }


  return (
    <div className='main-content'>
      <h1>Tasks:</h1>

      <div className='map-area'>
        {tasks.map((x) => (
          <div className='task-wrapper' key={x.name}>
          <div className='task-container'> 
            <h3>{x.name}</h3>
            <span className='task-description'>Description: {x.description}</span>
          </div>
          <div className='button-container'>
          <button onClick={()=>handleDelete(x.name)} className='task-button' >Delete</button>
          </div>
          </div>
        ))}

      </div>
      <div className='task-forms'>
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
      <br></br>
          <button type="submit" className="statusButton">Add Task</button> 
        </form> : null}
      </div>
    </div>
  )
}

export default GuestTask
