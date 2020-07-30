import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const createReducer = combineReducers({
    courseReducer
});

export default createReducer;