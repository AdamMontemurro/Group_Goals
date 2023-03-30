import {  Link, useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()


  return (
    <div className='header'>
      <div style={{ cursor: "pointer" }} onClick={()=>navigate('/')} >
      <img src="/static/media/LElogo.99ac6fe7.png" alt="logo" ></img>
      </div>
      <div className='userArea'>
        {/* <a className='statusButton' style={{ cursor: "pointer" }} onClick={()=>navigate('/')}>Login</a> */}
        <Link to="/Login" className='statusButton' activeclassname="active" style={{ cursor: "pointer" }}>Login</Link>
      </div>
    </div>
  )
}

export default Nav
