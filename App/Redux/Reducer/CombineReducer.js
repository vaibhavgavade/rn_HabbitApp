import {ReducerOne} from '../Reducer/ReducerOne';
import {combineReducers} from 'redux';
export const rootReducer = combineReducers({
  reduc1: ReducerOne,
});
