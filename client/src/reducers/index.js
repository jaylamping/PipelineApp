import { combineReducers } from 'redux';
import calloutReducer from './calloutReducer';

export default combineReducers({
  callout: calloutReducer
});