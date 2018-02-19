import * as TYPES from '../types';

const initialState = {
  user: null
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOG_IN:
      return {...state};
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case TYPES.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state
  }
}