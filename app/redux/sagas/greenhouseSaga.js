import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {showToast} from '../actions/app';
import * as TYPES from '../types';
import * as api from '../../api';

function* getGreenhouseData(action) {
  const response = yield call(api.fetchGreenhouseData);
  console.log('response on fetch, ', response);
}

export default [
  takeLatest(TYPES.GET_GREENHOUSE_DATA, getGreenhouseData),
];