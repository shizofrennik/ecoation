import { all } from 'redux-saga/effects'
import authSaga from './authSaga';
import greenhouseSaga from './greenhouseSaga';

function* rootSaga() {
  yield all([
    ...authSaga,
    ...greenhouseSaga
  ]);
}

export default rootSaga;