import React from 'react'
import SideNav from './SideNav'

const Sidebar = ({setTab}) => {


  return (
    <div className='sideBar'>
      <SideNav setTab={setTab}/>
    </div>
  )
}

export default Sidebar
