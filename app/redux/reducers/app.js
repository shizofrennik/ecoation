import * as TYPES from '../types';

const initialState = {
  toast: {message: null, type: null}
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case TYPES.SHOW_TOAST:
      let {message, type} = action.payload;
      return {
        ...state,
        toast: {message, type}
      };
    default:
      return state
  }
}