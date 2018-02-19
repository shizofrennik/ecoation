import * as TYPES from '../types';

const initialState = {
  greenhouse: null
}

export default function greenhouse(state = initialState, action) {
  switch (action.type) {
    case TYPES.SHOW_TOAST:
      return {
        ...state,
      };
    default:
      return state
  }
}