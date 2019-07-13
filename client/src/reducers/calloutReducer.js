import uuid from 'uuid';
import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT } from '../actions/types';

const initialState = {
  callouts: [
    { id: uuid(), compressor: 'Rupe', operator: 'Zak Goerke' },
    { id: uuid(), compressor: 'Zenith', operator: 'Joey Lamping' },
    { id: uuid(), compressor: 'Kirkman', operator: 'Travis Seipel' },
    { id: uuid(), compressor: 'Brehm', operator: 'Collin Ayer' }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CALLOUTS:
      return {
        ...state
      };
    default:
      return state;
  };
};