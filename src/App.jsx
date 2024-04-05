import React, { useEffect ,useState} from 'react';
import './App.css';
import { useDataLayerValue } from './reducer';
import Login from './Login';
import Player from "./Player";
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify=new SpotifyWebApi();
function App() {
  //  const [token,setToken]=useState(null)
   const [{user,token},dispatch]=useDataLayerValue();
   useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if (_token) {
       dispatch({
        type: 'SET_TOKEN',
        token: _token
       })
        spotify.setAccessToken(_token);
        spotify.getMe().then(
         
            user => {
                
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            },
            error => console.error('Error fetching user:', error)
        );
        spotify.getUserPlaylists().then((playlists) => {
          dispatch({
              type: "SET_PLAYLISTS",
              playlists: playlists
          });
          // console.log(playlists); // Logging playlists
         
      });
    }
}, []);
               

  useEffect(()=>{
// console.log(token)
  },[token])
  return (
    
    <div className="App">
      {
        token?(
         <Player/>
  ):(
        <Login/>
  )
      }
      {/* <Login/> */}
    </div>
  );
}

export default App;
