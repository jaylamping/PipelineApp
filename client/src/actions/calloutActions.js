import { tokenConfig } from './authActions'; 
import { returnErrors } from './errorActions';
import axios from 'axios';
import { 
  GET_CALLOUTS, 
  ADD_CALLOUT, 
  DELETE_CALLOUT, 
  CALLOUT_LOADING, 
  SELECT_CALLOUT 
} from '../actions/types';

export const getCallouts = () => async dispatch => {
  dispatch(setCalloutLoading());
  try {
    const res = await axios.get('/api/callouts');
    dispatch({
      type: GET_CALLOUTS,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  };
};

export const addCallout = callout => async (dispatch, getState) => {
  try {
    const res = await axios.post('api/callouts', callout, tokenConfig(getState));
    dispatch({
      type: ADD_CALLOUT,
      payload: res.data
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  };
};

export const deleteCallout = ids => (dispatch, getState) => {
  ids.forEach(async id => {
    try {
      await axios.delete(`/api/callouts/${id}`, tokenConfig(getState));
      dispatch({
        type: DELETE_CALLOUT,
        payload: id
      });
    } catch (err) {
      dispatch(returnErrors(err.response.data, err.response.status));
    };
  });
};

export const selectCallout = id => dispatch => {
  dispatch({
    type: SELECT_CALLOUT,
    payload: id
  });
};

export const setCalloutLoading = () => {
  return {
    type: CALLOUT_LOADING
  };
};