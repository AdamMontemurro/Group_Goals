
import Client from '../../services/api'
import { useState } from 'react'


const LoginForm = ({setRegisterToggle, setUser, setTab }) => {


  const loginUser = async (data) => {
    try {
      const res = await Client.post('/users/login', data)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', res.data.user.id)
      // navigate('/dashboard')
      return res.data
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  const initialState = {
    email: '',
    password: '',
}

const [formValues, setFormValues] = useState(initialState)

const toggle = ()=> {
  setRegisterToggle(false)
}

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const onSubmit= async (e) => {
  e.preventDefault()
  const payload = await loginUser(formValues)
  setUser(payload)
  setFormValues(initialState)
  setTab(4)
}

  return (
    <form className='main-content loginform' onSubmit={onSubmit}>
      <h1>Login</h1>
      <label htmlFor="email">Email: </label> <br></br>
      <input
        name="email"
        type="email"
        placeholder="Enter email"
        onChange={handleChange}
        required
      />
      <br></br>
      <label htmlFor="password">Password: </label> <br></br>
      <input
        name="password"
        type="password"
        placeholder="Enter email"
        onChange={handleChange}
        required
      />
      <br></br>
      <h3>Don't have an account? <span className='goldText' style={{ cursor: "pointer" }} onClick={()=>toggle()}>Register</span></h3>
      <button className="statusButton">Submit</button>
    </form >


  )
}

export default LoginForm
