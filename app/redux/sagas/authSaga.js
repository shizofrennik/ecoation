import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {setAuthenticationToken, clearAuthenticationToken} from '../../auth';
import {showToast} from '../actions/app';
import {setUser} from '../actions/auth';
import * as TYPES from '../types';
import * as api from '../../api';

function* loginFlow(action) {
  try {
    let {credentials, navigation} = action.payload;

    let response = yield call(api.fetchSignIn, credentials);
    
    if(response.error) {
      yield put(showToast({message: response.message, type: 'danger'}));
    } else {
      yield put(setUser(response));
      console.log('token:', response.token);
      yield call(setAuthenticationToken, response.token);
      yield call(navigation.navigate, "SignedIn");
    }
  } catch (error) {
    yield put(showToast({message: error.message, type: 'danger'}));
  }
}

function* logoutFlow(action) {
  try {
    let {navigation} = action.payload;
    yield call(clearAuthenticationToken);
    yield call(navigation.navigate, "SignedOut");
  } catch (error) {
    yield put(showToast({message: error.message, type: 'danger'}));
  }
}

export default [
  takeLatest(TYPES.LOG_IN, loginFlow),
  takeLatest(TYPES.LOG_OUT, logoutFlow)
];