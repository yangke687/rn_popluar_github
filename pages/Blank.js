import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import NavigationBar from '../NavigationBar';

export default class extends Component {
  render() {
    return (
      <View>
        <NavigationBar
          title="Blank Page"
          statusBar={{ backgroundColor: '#EE6363' }}
          style={{ backgroundColor: '#EE6363' }}
          leftButton={
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, marginLeft: 5 }}
                source={require('../res/images/ic_arrow_back_white_36pt.png')}
              />
            </TouchableOpacity>
          }
          rightButton={
            <TouchableOpacity>
              <Image
                style={{ width: 22, height: 22, marginRight: 5 }}
                source={require('../res/images/ic_star.png')}
              />
            </TouchableOpacity>
          }
        />
        <Text>Blank Page</Text>
      </View>
    );
  }
}
