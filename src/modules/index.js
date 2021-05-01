import { combineReducers } from 'redux';
import getApiReducer from './getAPI';
import setGraphReducer from './setGraph';

const rootReducer = combineReducers({ getApiReducer, setGraphReducer });

export default rootReducer;
