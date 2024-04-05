import React from 'react'
import "./Footer.css"
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import Grid from '@mui/material/Grid'; 
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
function Footer() {
  return (
    <div className="footer">
     <div className="footer_left">
   <p>album and song details</p>
     </div>
     <div className="footer_center">
     <ShuffleOutlinedIcon className="footer_green"/>
     <PlayCircleFilledWhiteOutlinedIcon className="footer_icon"/>
     <SkipNextOutlinedIcon className="footer_icon"/>
     <RepeatOutlinedIcon className="footer_icon" />
      {/* <p>player control</p> */}
     </div>
     <div className="footer_left">
    <Grid container spacing={2}>
      <Grid item >
      <PlaylistPlayIcon/>
      </Grid>
      <Grid item >
        <VolumeDownIcon/>
      </Grid>
      <Grid item >
        <Slider/>
      </Grid>
    </Grid>
      <p>volume control</p>
     </div>
    </div>
  )
}

export default Footer
