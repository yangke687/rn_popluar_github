import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class extends Component {
  render() {
    return (
      <View>
        <Text>Welcome to Page 05</Text>
        <Button
          title="Open Drawer"
          onPress={() => this.props.navigation.openDrawer()}
        />
        <Button
          title="Toggle Drawer"
          onPress={() => this.props.navigation.toggleDrawer()}
        />
        <Button
          title="Go to Page 04"
          onPress={() => this.props.navigation.navigate('Page4')}
        />
      </View>
    );
  }
}
