import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from '../Reducer/CombineReducer';
export const store = createStore(rootReducer);
