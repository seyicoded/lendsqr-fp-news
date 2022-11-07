import {
    SET_LOADING,
    IS_LOGGED_IN,
    NEWS
  } from '../action/actionTypes';
  
  const initialState = {
    appLoading: false,
    isLoggedIn: false,
    userWholeLoginData: {},
    news: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {...state, appLoading: action.payLoad};
      case IS_LOGGED_IN:
        return {
          ...state,
          isLoggedIn: action.payLoad.status,
          userWholeLoginData: action.payLoad.data
        };
      case NEWS:
        return {
          ...state,
          news: action.payLoad,
        };
      default:
        return state;
    }
  };
  
  export default reducer;