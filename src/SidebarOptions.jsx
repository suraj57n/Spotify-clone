import React from 'react'
import "./SidebarOption.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
function SidebarOption({title,Icon}) {
  return (
    <div className='sidebarOption'>
        {Icon && <Icon className="sidebarOPtion_icon"/>}
      <p>{Icon?<h4>{title}</h4>:<p>{title}</p>}</p>
    </div>
  )
}

export default SidebarOption
