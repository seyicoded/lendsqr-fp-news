import { setUser } from "../../local/storage"
import { SET_LOADING, IS_LOGGED_IN, NEWS } from "./actionTypes"

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

export const updateNewsState = (data, dispatch)=>{
    setUser(data);
    dispatch({
        type: NEWS,
        payLoad: data
    })    
}