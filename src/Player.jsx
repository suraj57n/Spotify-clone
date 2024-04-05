import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import "./Player.css"
import Body from './Body'
function Player() {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar/>
        <Body/>
        <Footer/>
      </div>
    </div>
  )
}

export default Player
