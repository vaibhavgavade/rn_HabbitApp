import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './App/src/HomeScreen';
import DetailScreen from './App/src/DetailScreen';
import UpdateData from './App/src/UpdataData';
const AppStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      headerBackTitle: null,
    },
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: {
      headerBackTitle: null,
    },
  },
  update: {
    screen: UpdateData,
  },
});
export default createAppContainer(AppStack);
