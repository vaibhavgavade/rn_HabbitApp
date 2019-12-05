import {AsyncStorage} from 'react-native';
import {rootReducer} from '../Reducer/CombineReducer';
// export const store = createStore(rootReducer);
import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['reduc1'],
};
const PersistReducer = persistReducer(persistConfig, rootReducer);
const Store = createStore(PersistReducer);
const persistor = persistStore(Store);
export {Store, persistor};
