import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'HOME PAGE',
  };

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Home</Text>
        <Button
          title="Go to Page01"
          onPress={() =>
            navigation.navigate('Page01', { title: 'Dynamic Page  01' })
          }
        />
        <Button
          title="Go to Page02"
          onPress={() => navigation.navigate('Page02', { title: 'PAGE 02' })}
        />
        <Button
          title="Go to Flat List"
          onPress={() =>
            navigation.navigate('FlatList', { title: 'Flat List' })
          }
        />
      </View>
    );
  }
}

export default Home;
