import React from 'react'
import Home from './Home'

const Wrapper = ({user}) => {
  return (
    <div className='main-content'>
      <Home user={user}/>
    </div>
  )
}

export default Wrapper
