import React from 'react'
import './Body.css'
import Header from './Header'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useDataLayerValue} from "./reducer"
import SongRow from './SongRow';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
function Body({spotify}) {
  const[{discover_weekly},dispatch]=useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
        <PlayCircleFilledOutlinedIcon className="body_shuffle"/>
        <FavoriteIcon fontSize='large'/>
        <MoreHorizIcon/>
        </div>
        {discover_weekly?.tracks.items.map(item => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </div>
    </div>
  )
}

export default Body
