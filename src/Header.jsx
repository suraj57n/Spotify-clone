import React from 'react'
import "./Header.css"
import SearchOutlined from '@mui/icons-material/SearchOutlined'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from './reducer'
function Header() {
    const[{user},dispatch]=useDataLayerValue();
  return (
    <div>
      <div className="header">
        <div className="header_left">
        <SearchOutlined/>
        <input
        placeholder='Search for artist,Songs ,'
        type="text"
         />
        </div>
        <div className="header_right">
            <Avatar src={user?.images[0].url} alt="RN" 
            />
            <h4>{user?.display_name}</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
