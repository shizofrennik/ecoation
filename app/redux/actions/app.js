import * as TYPES from '../types';

export function showToast(payload) {
  return {
    type: TYPES.SHOW_TOAST,
    payload
  }
}