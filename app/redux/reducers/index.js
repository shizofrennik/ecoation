import { combineReducers } from 'redux';
import auth from './auth';
import greenhouse from './greenhouse';
import app from './app';

export default combineReducers({auth, app, greenhouse})