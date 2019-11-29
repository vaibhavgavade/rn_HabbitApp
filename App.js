import React from 'react';
import AppStack from './Route';
import {Provider} from 'react-redux';
import {store} from './App/Redux/Store/StoreData';
const App = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};
export default App;
