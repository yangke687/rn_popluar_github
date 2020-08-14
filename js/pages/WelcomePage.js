import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class extends Component {
  componentDidMount() {
    const { navigation } = this.props;
    this.timeoutHandler = setTimeout(
      () => navigation.replace({ routeName: 'Home' }),
      2000
    );
  }

  componentWillUnmount() {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 26,
  },
});
