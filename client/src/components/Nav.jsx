import {  Link, useNavigate } from 'react-router-dom'

const Nav = ({user, setUser, setTab}) => {
  const navigate = useNavigate()

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
    navigate('/Login')
  }

  const onClick =(x)=> {
    setTab(x)
}

  return (
    <div className='header'>
      <div style={{ cursor: "pointer" }} onClick={()=>navigate('/')} >
      <img src="/static/media/LElogo.99ac6fe7.png" alt="logo" ></img>
      </div>
      <div className='userArea'>
        {/* <a className='statusButton' style={{ cursor: "pointer" }} onClick={()=>navigate('/')}>Login</a> */}
        {user ? <a style={{ cursor: "pointer" }} onClick={() => handleLogOut()}>Logout</a>
        : <a className='statusButton' activeclassname="active" style={{ cursor: "pointer" }} onClick={()=>onClick(5)}>Login</a> }
      </div>
    </div>
  )
}

export default Nav
