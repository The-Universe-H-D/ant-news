import { combineReducers } from 'redux';
import getApiReducer from './getAPI';

const rootReducer = combineReducers({ getApiReducer });

export default rootReducer;
