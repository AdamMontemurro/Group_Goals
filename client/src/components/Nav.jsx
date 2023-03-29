import {  useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()


  return (
    <div className='header'>
      <div>
      <img src="/static/media/LElogo.99ac6fe7.png" alt="logo"></img>
      </div>
      <div className='userArea'>
        <button className='statusButton'>Login</button>
      </div>
    </div>
  )
}

export default Nav
