import uuid from 'uuid';
import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT } from '../actions/types';

const initialState = {
  callouts: [
    { id: uuid(), compressor: 'Rupe', operator: 'Zak Goerke', area: 'Tulsa', explanation: 'No Lube' },
    { id: uuid(), compressor: 'Zenith', operator: 'Joey Lamping', area: 'Kansas City', explanation: 'High Temp' },
    { id: uuid(), compressor: 'Kirkman', operator: 'Travis Seipel', area: 'Kansas City', explanation: 'Unit Startup' },
    { id: uuid(), compressor: 'Brehm', operator: 'Collin Ayer', area: 'Las Vegas', explanation: 'Unit downtime' },
    { id: uuid(), compressor: 'Brodie', operator: 'Andy Lavin', area: 'California', explanation: 'No Lube' }
  ]
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CALLOUTS:
      return {
        ...state
      };
    case DELETE_CALLOUT:
      return {
        ...state,
        callouts: state.callouts.filter(click => click.id !== action.payload)
      };
    case ADD_CALLOUT:
        return {
          ...state,
          callouts: [action.payload, ...state.callouts]
        };
    default:
      return state;
  };
};