export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://online-song-player.firebaseapp.com/";
const clientId = "f03461b8140f4cde8b16c22e25f159e2";
const scope = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];
export const getTokenFromUrl=()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{})
}
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join("%20")}&response_type=token&show_dialog=true`;
