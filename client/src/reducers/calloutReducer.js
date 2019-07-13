import { GET_CALLOUTS, ADD_CALLOUT, DELETE_CALLOUT, CALLOUT_LOADING } from '../actions/types';

const initialState = {
  callouts: [],
  loading: false
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CALLOUTS:
      return {
        ...state,
        callouts: action.payload,
        loading: false
      };
    case DELETE_CALLOUT:
      return {
        ...state,
        callouts: state.callouts.filter(click => click._id !== action.payload)
      };
    case ADD_CALLOUT:
      return {
        ...state,
        callouts: [action.payload, ...state.callouts]
      };
    case CALLOUT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  };
};