import React from 'react'
import Footer from './Footer'
import Sidebar from './Sidebar'
import "./Player.css"
import Body from './Body'
function Player({spotify}) {
  return (
    <div className='player'>
      <div className="player_body">
        <Sidebar/>
        <Body spotify={spotify}/>
        <Footer/>
      </div>
    </div>
  )
}

export default Player
