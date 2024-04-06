import { useContext } from "react";
import { DataLayerContext } from "./DataLayer";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //"BQDVNl02N-ahLB9-bva_VIThOMmuR5T0xSuWQcBNS_pmpMIENSeSaB9urKnOPr2kYp-_Taisih6_xuMxWapvj1eLsIS2Ws3Kf3Qse93uPfGdOkSdUVGoWiv2xA5KwzvYYsw8fu1p2f1DqjHc6OPK4kZOCZ23RvH1Rj98D13-tX1dGZ582gK7iGO5ZoOL9Uj26s-6p2wOi-IAwWiAKZdV"
    //remove after done developing
    // 31v4d6tfsyfviotsurafvhmoaui4
    token:null
    //"37i9dQZF1E36tW5bkWLjXH"
};

const reducer = (state, action) => {
    
    switch (action.type) {
        case "SET_USER":
            // console.log(action.user);
            return {
                ...state,
                user: action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token: action.token
            }
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default:
            return state;
    }
};

export default reducer;
export const useDataLayerValue=()=>useContext(DataLayerContext)