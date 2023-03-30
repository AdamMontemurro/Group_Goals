import Nav from "../Nav"
import Sidebar from "../Sidebar"
import LoginForm from "./LoginForm"
import Register from "./Register"
import { useState } from 'react'


const Login = () => {

  const [registerToggle, setRegisterToggle] = useState(true)

  return (
    <div>
      <Nav />
      <Sidebar />
      {registerToggle ? <LoginForm setRegisterToggle={setRegisterToggle}/> : <Register setRegisterToggle={setRegisterToggle} /> }
    </div>
  )
}

export default Login
