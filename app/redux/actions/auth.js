import * as TYPES from '../types';

export function login({credentials, navigation}) {
  return {
    type: TYPES.LOG_IN,
    payload: {credentials, navigation}
  }
}

export function logout(navigation) {
  return {
    type: TYPES.LOG_OUT,
    payload: {navigation}
  }
}

export function setUser(user) {
  return {
    type: TYPES.SET_USER,
    payload: user
  }
}