import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT, CALLOUT_LOADING } from '../actions/types';
import { tokenConfig } from './authActions'; 
import { returnErrors } from './errorActions';
import axios from 'axios';

export const getCallouts = () => async dispatch => {
  dispatch(setCalloutLoading());
  let res = await axios.get('/api/callouts');
  dispatch({
    type: GET_CALLOUTS,
    payload: res.data
  });
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

export const deleteCallout = id => async (dispatch, getState) => {
  try {
    await axios.delete(`/api/callouts/${id}`, tokenConfig(getState));
    dispatch({
      type: DELETE_CALLOUT,
      payload: id
    });
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  };
};

export const setCalloutLoading = () => {
  return {
    type: CALLOUT_LOADING
  };
};