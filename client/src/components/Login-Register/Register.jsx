import React from 'react'
import Client from '../../services/api'
import { useState } from 'react'

const Register = ({setRegisterToggle}) => {

  const toggle = ()=> {
    setRegisterToggle(true)
  }

  const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/users/register', data)
        return res.data
    } catch (error) {
        throw error
    }
}

const initialState = {
  userName: '',
  firstName:'',
  lastName:'',
  email: '',
  password: '',
  confirmPassword: ''
}

const [formValues, setFormValues] = useState(initialState)

const handleChange = (e) => {
  setFormValues({ ...formValues, [e.target.name]: e.target.value })
}

const onSubmit = async (e) => {
  e.preventDefault()
  if (formValues.password === formValues.confirmPassword) {
    await RegisterUser(formValues)
    toggle()
  } else {
    alert('Passwords do not match')
  }
  setFormValues(initialState)
}

  return (
    <form className='main-content loginform' onSubmit={onSubmit}>
      <h1>Register</h1>
      <label htmlFor="firstName">First Name: </label> <br></br>
      <input
        name="firstName"
        type="string"
        placeholder="Enter First Name"
        onChange={handleChange}
        defaultValue={formValues.firstName}
        required
      />
      <br></br>
      <label htmlFor="lastName">Last Name: </label> <br></br>
      <input
        name="lastName"
        type="string"
        placeholder="Enter Last Name"
        onChange={handleChange}
        defaultValue={formValues.lastName}
        required
      />
      <br></br>
      <label htmlFor="userName">Username: </label> <br></br>
      <input
        name="userName"
        type="string"
        placeholder="Enter Username"
        onChange={handleChange}
        defaultValue={formValues.userName}
        required
      />
      <br></br>
      <label htmlFor="email">Email: </label> <br></br>
      <input
        name="email"
        type="email"
        placeholder="Enter Email"
        onChange={handleChange}
        defaultValue={formValues.email}
        required
      />
      <br></br>
      <label htmlFor="password">Password: </label> <br></br>
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
        defaultValue={formValues.password}
        required
      />
      <br></br>
      <label htmlFor="confirmPassword"> Confirm Password: </label> <br></br>
      <input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        defaultValue={formValues.confirmPassword}
        required
      />
      <br></br>
      <h3>Already have an account? <span className='goldText' style={{ cursor: "pointer" }} onClick={()=>toggle()} >Login</span></h3>
      <button className="statusButton" >Submit</button>
    </form>
  )
}

export default Register
