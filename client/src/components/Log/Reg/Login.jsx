import React from 'react'

const Login = () => {

  const [form, setForm] = useState(false)
  const toggleForm = () => {
    setForm(!form)
  }

  return (
    <div>
      {form ? <Register toggleForm={toggleForm} /> : <LoginForm toggleForm={toggleForm} setUser={setUser} />}
    </div>
  )
}

export default Login
