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
  const id="31v4d6tfsyfviotsurafvhmoaui4";
   const [{user,token},dispatch]=useDataLayerValue();
  //  console.log(token)
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


      ////////////////////////////////////////////////////////////////
      // console.log(token)
      // {console.log(user.id);}
      spotify.getPlaylist("37i9dQZF1E36tW5bkWLjXH").then((response=>{
        // console.log(response);
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response
        })
      }))
//       spotify.getPlaylist("31v4d6tfsyfviotsurafvhmoaui4").then((playlist) => {
//         console.log(playlist);
// });

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
