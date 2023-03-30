import './App.css';
import Template from './components/Template';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

function App() {

  const [user, setUser] = useState(null)

  const CheckSession = async () => {
    try {
      const res = await Client.get('/user/session')
      return res.data
    } catch (error) {
      throw error
    }
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Routes className="Routes">
      <Route path='/' element={<Template />} />
      </Routes>
    </div>
  );
}

export default App;
