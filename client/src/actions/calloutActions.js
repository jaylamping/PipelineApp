import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT, CALLOUT_LOADING } from '../actions/types';
import axios from 'axios';

export const getCallouts = () => async dispatch => {
  await dispatch(setCalloutLoading());
  let res = await axios.get('/api/callouts');
  await dispatch({
    type: GET_CALLOUTS,
    payload: res.data
  });
};

export const addCallout = callout => async dispatch => {
  let res = await axios.post('api/callouts', callout);
  await dispatch({
    type: ADD_CALLOUT,
    payload: res.data
  });
};

export const deleteCallout = id => async dispatch => {
  await axios.delete(`/api/callouts/${id}`);
  await dispatch({
    type: DELETE_CALLOUT,
    payload: id
  });
};

export const setCalloutLoading = () => {
  return {
    type: CALLOUT_LOADING
  };
};