import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import New from './pages/New';
import Feed from './pages/Feed';

import logo from './assets/logo.png';


// Alguns tipos de navegação:
// createStackNavigator, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator
export default createAppContainer(
  createStackNavigator({
    Feed,
    New,
  }, {
    initialRouteName: 'New',
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#000', 
      headerTitle: <Image style={{ marginHorizontal: 20 }} source={logo} />,
    },
    mode: 'modal'
  })
);