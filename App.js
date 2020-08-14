/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { StyleSheet, View, Image, Navigator } from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import TabNavigator from 'react-native-tab-navigator';
// import BlankPage from './pages/Blank';
// import {
//   AppStackNavigator,
//   AppTabNavigator,
//   AppDrawerNavigator,
// } from './navigators';
import ListViewDemo from './pages/ListViewDemo';

// const App = createAppContainer(AppStackNavigator);
// const App = createAppContainer(AppStackNavigator);

class App extends React.Component {
  render() {
    return (
      <ListViewDemo />
      // <BlankPage />
    );
  }
}

export default App;
