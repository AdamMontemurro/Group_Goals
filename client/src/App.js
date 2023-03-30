import './App.css';
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Client from './services/api'
import Login from './components/Login-Register/Login';
import Landing from './components/Landing';

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
      <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
