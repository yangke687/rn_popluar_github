import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Page01 extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Page 01</Text>
        <Button title="Go BAck" onPress={() => navigation.goBack()} />
      </View>
    );
  }
}

export default Page01;
