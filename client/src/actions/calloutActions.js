import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT } from '../actions/types';

export const getCallouts = () => {
  return {
    type: GET_CALLOUTS
  };
};