
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Wrapper from "./Wrapper"
import { useState } from 'react'
import Calculator from "./Calculator/Calculator"
import Notepad from "./Notepad"
import LoginForm from "./Login-Register/LoginForm"
import Register from "./Login-Register/Register"
import Task from "./Task/Task"
import GuestTask from "./Task/GuestTask"

const Landing = ({user,setUser}) => {

const [tab, setTab] = useState(1)
const [registerToggle, setRegisterToggle] = useState(true)
const [note, setNote] = useState('')

  if (tab === 1) {
  return (
    <div>
      <Nav user={user} setUser={setUser} setTab={setTab}/>
      <Sidebar setTab={setTab}/>
      <Wrapper user={user}/>
    </div>
  )}else if (tab === 2) {
    return (
      <div>
        <Nav user={user} setUser={setUser} setTab={setTab}/>
        <Sidebar setTab={setTab}/>
        <Calculator />
      </div>
    )} else if (tab === 3) {
      return (
        <div>
          <Nav user={user} setUser={setUser} setTab={setTab}/>
          <Sidebar setTab={setTab}/>
          <Notepad setNote={setNote} note={note} />
        </div>
      )} 
      else if (tab === 4)
        return(
          <div>
            <Nav user={user} setUser={setUser} setTab={setTab}/>
            <Sidebar setTab={setTab}/>
            {user ? <Task user={user} /> : <GuestTask /> }
          </div>
        )
      else if (tab === 5)
      return (
        <div>
        <Nav user={user} setUser={setUser} setTab={setTab}/>
        <Sidebar setTab={setTab}/>
        {registerToggle ? <LoginForm setRegisterToggle={setRegisterToggle} setUser={setUser}/> : <Register setRegisterToggle={setRegisterToggle} /> }
        </div>
      )
  
}

export default Landing
