import { setUser } from "../../local/storage"
import { SET_LOADING, IS_LOGGED_IN } from "./actionTypes"

export const updateAppLoader = (bool, dispatch)=>{
    dispatch({
        type: SET_LOADING,
        payLoad: bool
    })    
}

export const updateLoggedIn = (bool, data, dispatch)=>{
    setUser(data);
    dispatch({
        type: IS_LOGGED_IN,
        payLoad: {
            status: bool,
            data
        }
    })    
}