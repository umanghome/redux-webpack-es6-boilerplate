import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username
      };
    case 'SET_PASSWORD':
      return {
        ...state,
        password: action.password
      };
    case 'SET_TOKEN':
      localStorage.setItem('token', action.token);
      return state;
    default:
      return {
        username: '',
        password: ''
      };
  }
}

export default combineReducers({
  appReducer: appReducer,
  routing
});
