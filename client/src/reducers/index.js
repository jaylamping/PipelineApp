import { combineReducers } from 'redux';
import authReducer from './authReducer';
import calloutReducer from './calloutReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  auth: authReducer,
  callout: calloutReducer,
  error: errorReducer
});