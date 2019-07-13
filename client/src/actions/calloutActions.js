import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT, CALLOUT_LOADING } from '../actions/types';
import axios from 'axios';

export const getCallouts = () => dispatch => {
  dispatch(setCalloutLoading());
  axios
    .get('/api/callouts')
    .then(res => 
      dispatch({
        type: GET_CALLOUTS,
        payload: res.data
      })
    );
};

export const addCallout = callout => dispatch => {
  axios
    .post('api/callouts', callout)
    .then(res => 
      dispatch({
        type: ADD_CALLOUT,
        payload: res.data
      })
    )
};

export const deleteCallout = id => dispatch => {
  axios
    .delete(`/api/callouts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_CALLOUT,
        payload: id
      })
    )
};



export const setCalloutLoading = () => {
  return {
    type: CALLOUT_LOADING
  };
};