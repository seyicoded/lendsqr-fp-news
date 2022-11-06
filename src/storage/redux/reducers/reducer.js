import {
    SET_USER_TYPE,
    IS_USER_PROFILE_COMPLETED,
    IS_USER_SUBSCRIBED,
    SET_USER_TOKEN,
    USER_FULL_NAME,
    SET_USER_BEARER_TOKEN,
    SET_USER_EMAIL,
    SET_USER_IMAGE_URI,
    SET_USER_ID,
    SET_WHOLE_USER_LOGIN_DATA,
    SET_USER_IMAGE_SIZE,
  } from '../action/actionTypes';
  
  const initialState = {
    whichUser: '',
    subscribed: false,
    profileCompleted: false,
    userToken: '',
    userID: 'abcd',
    userFullName: '',
    bearerToken: 'testBearerToken',
    userImageUri: {},
    userImageSize: '',
    userEmail: '',
    userPhone: '+2348131248253',
    userAddress: 'Lagos, Nigeria',
    userWholeLoginData: {},
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_USER_TYPE:
        return {...state, whichUser: action.payLoad};
      case SET_USER_TOKEN:
        return {...state, userToken: action.payLoad};
      case IS_USER_PROFILE_COMPLETED:
        return {...state, profileCompleted: action.payLoad};
      case IS_USER_SUBSCRIBED:
        return {...state, subscribed: action.payLoad};
      case USER_FULL_NAME:
        return {...state, userFullName: action.payLoad};
      case SET_USER_BEARER_TOKEN:
        return {...state, bearerToken: action.payLoad};
      case SET_USER_EMAIL:
        return {...state, userEmail: action.payLoad};
      case SET_USER_IMAGE_URI:
        return {...state, userImageUri: action.payLoad};
      case SET_USER_ID:
        return {...state, userID: action.paylaod};
      case SET_WHOLE_USER_LOGIN_DATA:
        return {...state, userWholeLoginData: action.payLoad};
      case SET_USER_IMAGE_SIZE:
        return {...state, userImageSize: action.payLoad};
      default:
        return state;
    }
  };
  
  export default reducer;