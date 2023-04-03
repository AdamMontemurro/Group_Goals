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
      <img className="logo-image" src="https://i.imgur.com/5RIIekP.png" alt="logo" ></img>
      </div>
      <div className='userArea'>
        {user ? <h4>Welcome! {user.user.name}</h4> : null}
        {user ? <h4 className='statusButton' style={{ cursor: "pointer" }} onClick={() => handleLogOut()}>Logout</h4>
        : <h4 className='statusButton' activeclassname="active" style={{ cursor: "pointer" }} onClick={()=>onClick(5)}>Login</h4> }
      </div>
    </div>
  )
}

export default Nav
