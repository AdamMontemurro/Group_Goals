import Nav from "./Nav"
import Sidebar from "./Sidebar"
import Wrapper from "./Wrapper"

const Landing = ({user,setUser}) => {
  return (
    <div>
      <Nav user={user} setUser={setUser}/>
      <Sidebar />
      <Wrapper user={user}/>
      
    </div>
  )
}

export default Landing
