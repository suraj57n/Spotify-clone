export const authEndpoint="https://accounts.spotify.com/authorize";
const redirectUri="http://localhost:3000/"
const cliendId="f03461b8140f4cde8b16c22e25f159e2"
const scope=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
export const loginUrl=`${authEndpoint}?cliendId=${cliendId}&redirectUri=${redirectUri}&scope=${scope.join("%20")}&resposeType=token&show_dialog=true`