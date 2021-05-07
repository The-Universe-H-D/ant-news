import { combineReducers } from 'redux';
import getApiReducer from './getAPI';
import setGraphReducer from './setGraph';
import setLoginReducer from './setLogin';

const rootReducer = combineReducers({ getApiReducer, setGraphReducer, setLoginReducer });

export default rootReducer;
