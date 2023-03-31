
import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Wrapper from "./Wrapper"
import { useState } from 'react'
import Calculator from "./Calculator/Calculator"
import Notepad from "./Notepad"
import LoginForm from "./Login-Register/LoginForm"
import Register from "./Login-Register/Register"

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
        <Nav user={user} setUser={setUser}/>
        <Sidebar setTab={setTab}/>
        <Calculator />
      </div>
    )} else if (tab === 3) {
      return (
        <div>
          <Nav user={user} setUser={setUser}v/>
          <Sidebar setTab={setTab}/>
          <Notepad setNote={setNote} note={note} />
        </div>
      )} 
      else if (tab === 4)
        return(
          <div>4</div>
        )
      else if (tab === 5)
      return (
        <div>
        <Nav user={user} setUser={setUser}/>
        <Sidebar setTab={setTab}/>
        {registerToggle ? <LoginForm setRegisterToggle={setRegisterToggle} setUser={setUser}/> : <Register setRegisterToggle={setRegisterToggle} /> }
        </div>
      )
  
}

export default Landing
