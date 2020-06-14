import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Button } from 'react-native';
import HomePage from '../pages/Home';
import Page01 from '../pages/Page01';
import Page02 from '../pages/Page02';

export const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomePage,
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
