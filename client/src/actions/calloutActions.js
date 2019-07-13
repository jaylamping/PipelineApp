import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT } from '../actions/types';

export const getCallouts = () => {
  return {
    type: GET_CALLOUTS
  };
};

export const deleteCallout = id => {
  return {
    type: DELETE_CALLOUT,
    payload: id
  };
};

export const addCallout = callout => {
  return {
    type: ADD_CALLOUT,
    payload: callout
  };
};