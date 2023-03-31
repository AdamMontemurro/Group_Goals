import React from 'react'

const SideNav = ({setTab}) => {

  const onClick =(x)=> {
    setTab(x)
}

  return (
    <div>
      <ul className='sideNavList'>
        <li className='list-item'>
          <div style={{ cursor: "pointer" }} onClick={()=>onClick(1)} className='list-item-div'>
            Home
          </div>
        </li>
        <li className='list-item'>
          <div className='list-item-div'>
            
          </div>
        </li>
        <li className='list-item'>
          <div style={{ cursor: "pointer" }} onClick={()=>onClick(3)} className='list-item-div'>
            Notepad
          </div>
        </li>
        <li className='list-item'>
          <div style={{ cursor: "pointer" }} onClick={()=>onClick(2)} className='list-item-div'>
            Calculator
          </div>
        </li>
        <li className='list-item'>
          <div style={{ cursor: "pointer" }} onClick={()=>onClick(4)} className='list-item-div'>
            Tasks
          </div>
        </li>
      </ul>
    </div>
  )
}

export default SideNav
