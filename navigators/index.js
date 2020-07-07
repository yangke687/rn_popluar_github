import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Button, Platform, ScrollView, SafeAreaView } from 'react-native';
import HomePage from '../pages/Home';
import Page01 from '../pages/Page01';
import Page02 from '../pages/Page02';
import Page04 from '../pages/Page04';
import Page05 from '../pages/Page05';
import FlatListDemo from '../pages/FlatListDemo';
import SectionListDemo from '../pages/SectionListDemo';

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
    },
    FlatList: {
      screen: FlatListDemo,
    },
    SectionList: {
      screen: SectionListDemo,
    },
    Page01: {
      screen: Page01,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.title,
      }),
    },
    Page02: {
      screen: Page02,
      navigationOptions: ({
        navigation: {
          state: { params },
          setParams,
        },
      }) => {
        return {
          title: params && params.title ? params.title : 'Page 02',
          headerRight: (
            <Button
              title={params.mode === 'edit' ? 'Typing...' : 'Clear'}
              onPress={() => {
                if (params.mode !== 'edit') {
                  setParams({ title: 'None' });
                }
              }}
            />
          ),
        };
      },
    },
  }
  // {
  //   defaultNavigationOptions: {
  //     header: null,
  //   },
  // }
);

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Page4: {
      screen: Page04,
      navigationOptions: {
        drawerLabel: 'Page 04',
        drawerIcon: ({ tintColor }) => (
          <Icons name="android" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Page5: {
      screen: Page05,
      navigationOptions: {
        drawerLabel: 'Page 05',
        drawerIcon: ({ tintColor }) => (
          <Icons name="android" size={24} style={{ color: tintColor }} />
        ),
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: 'darkblue',
    },
    contentComponent: (props) => (
      <ScrollView style={{ backgroundColor: 'lightgreen' }}>
        <SafeAreaView>
          <DrawerItems {...props} />
        </SafeAreaView>
      </ScrollView>
    ),
  }
);

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    };
  }

  render() {
    const { routes, index } = this.props.navigation.state;
    let theme = null;

    if (routes[index].params && routes[index].params.theme) {
      theme = routes[index].params.theme;
    }

    if (theme && theme.updateTime > this.theme.updateTime) {
      this.theme = theme;
    }
    return (
      <BottomTabBar
        {...this.props}
        activeTintColor={
          this.theme.activeTintColor || this.props.activeTintColor
        }
      />
    );
  }
}

export const AppTabNavigator = createBottomTabNavigator(
  {
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        tabBarLabel: 'Page 01',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icons
            name={focused ? 'home' : 'home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
    Page02: {
      screen: Page02,
      navigationOptions: {
        tabBarLabel: 'Page 02',
        tabBarIcon: ({ tintColor, focused }) => (
          <Icons
            name={focused ? 'account' : 'account-outline'}
            size={26}
            style={{ color: tintColor }}
          />
        ),
      },
    },
  },
  {
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? 'pink' : 'black',
    },
  }
);
