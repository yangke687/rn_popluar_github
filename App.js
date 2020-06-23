/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
import { StyleSheet, View, Image, Navigator } from 'react-native';
import { createAppContainer } from 'react-navigation';
// import TabNavigator from 'react-native-tab-navigator';
// import BlankPage from './pages/Blank';
import { AppStackNavigator, AppTabNavigator } from './navigators';

// const App = createAppContainer(AppStackNavigator);

const App = createAppContainer(AppTabNavigator);

// class App extends React.Component {
//   state = {
//     selectedTab: 'tb_popular',
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <TabNavigator>
//           {/** Home */}
//           <TabNavigator.Item
//             selected={this.state.selectedTab === 'tb_popular'}
//             selectedTitleStyle={{ color: 'red' }}
//             title="Home"
//             renderIcon={() => (
//               <Image
//                 style={styles.icon}
//                 source={require('./res/images/ic_polular.png')}
//               />
//             )}
//             renderSelectedIcon={() => (
//               <Image
//                 style={[styles.icon, styles.redTinColor]}
//                 source={require('./res/images/ic_polular.png')}
//               />
//             )}
//             // badgeText="1"
//             onPress={() => this.setState({ selectedTab: 'tb_popular' })}
//           >
//             <View style={styles.red} />
//           </TabNavigator.Item>
//           {/** Profile */}
//           <TabNavigator.Item
//             selected={this.state.selectedTab === 'tb_trending'}
//             selectedTitleStyle={{ color: 'green' }}
//             title="Trending"
//             renderIcon={() => (
//               <Image
//                 style={styles.icon}
//                 source={require('./res/images/ic_trending.png')}
//               />
//             )}
//             renderSelectedIcon={() => (
//               <Image
//                 style={[styles.icon, styles.greenTinColor]}
//                 source={require('./res/images/ic_trending.png')}
//               />
//             )}
//             onPress={() => this.setState({ selectedTab: 'tb_trending' })}
//           >
//             <View style={styles.green} />
//           </TabNavigator.Item>
//           {/** Favorites */}
//           <TabNavigator.Item
//             selected={this.state.selectedTab === 'tb_favorite'}
//             selectedTitleStyle={{ color: 'red' }}
//             title="Favorite"
//             renderIcon={() => (
//               <Image
//                 style={styles.icon}
//                 source={require('./res/images/ic_favorite.png')}
//               />
//             )}
//             renderSelectedIcon={() => (
//               <Image
//                 style={[styles.icon, styles.redTinColor]}
//                 source={require('./res/images/ic_favorite.png')}
//               />
//             )}
//             onPress={() => this.setState({ selectedTab: 'tb_favorite' })}
//           >
//             <View style={styles.red} />
//           </TabNavigator.Item>
//           {/** My */}
//           <TabNavigator.Item
//             selected={this.state.selectedTab === 'tb_my'}
//             selectedTitleStyle={{ color: 'green' }}
//             title="Profile"
//             renderIcon={() => (
//               <Image
//                 style={styles.icon}
//                 source={require('./res/images/ic_my.png')}
//               />
//             )}
//             renderSelectedIcon={() => (
//               <Image
//                 style={[styles.icon, styles.greenTinColor]}
//                 source={require('./res/images/ic_my.png')}
//               />
//             )}
//             onPress={() => this.setState({ selectedTab: 'tb_my' })}
//           >
//             <View style={styles.green} />
//           </TabNavigator.Item>
//         </TabNavigator>
//       </View>
//       <BlankPage />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  red: {
    flex: 1,
    backgroundColor: 'red',
  },
  green: {
    flex: 1,
    backgroundColor: 'green',
  },
  icon: {
    height: 24,
    width: 24,
  },
  redTinColor: {
    tintColor: 'red',
  },
  greenTinColor: {
    tintColor: 'green',
  },
});

export default App;
