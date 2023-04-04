import React from 'react'



const Home = ({user}) => {


  return (
    <div className='home'>
      <h2>Group Goal</h2>
      <p> Welcome to Group Goal. The app designed to help you stay productive.</p>
      <p>All our tools are free to use right inside your browser!</p>
      
      <div className='roadmap-div'>
      <p>Development Road Map:</p>
      <ul className='roadmap'>
        <li>Full Group Implimentation including group chat</li>
        <li>ChatGPT integration</li>
        <li>Voice Memos</li>
      </ul>
      <p>Send suggestions to <span className='users-name'>GroupGoalApp@gmail.com</span></p>
      </div>
    </div>
  )
}

export default Home
