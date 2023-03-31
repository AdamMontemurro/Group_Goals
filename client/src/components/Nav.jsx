import { useNavigate } from 'react-router-dom'

const Nav = ({user, setUser, setTab}) => {
  const navigate = useNavigate()



  const onClick =(x)=> {
    setTab(x)
}

const handleLogOut = () => {
  onClick(1)
  setUser(null)
  localStorage.clear()
  
}

  return (
    <div className='header'>
      <div style={{ cursor: "pointer" }} onClick={()=>navigate('/')} >
      <img src="/static/media/LElogo.99ac6fe7.png" alt="logo" ></img>
      </div>
      <div className='userArea'>
        {user ? <h4>Welcome! User</h4> : null}
        {user ? <h4 className='statusButton' style={{ cursor: "pointer" }} onClick={() => handleLogOut()}>Logout</h4>
        : <h4 className='statusButton' activeclassname="active" style={{ cursor: "pointer" }} onClick={()=>onClick(5)}>Login</h4> }
      </div>
    </div>
  )
}

export default Nav
