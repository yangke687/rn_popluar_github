import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

class Page02 extends Component {
  render() {
    const { navigation } = this.props;
    const { setParams } = navigation;
    return (
      <View>
        <Text>Page 01</Text>
        <Text>Without Navigation Header</Text>
        <Button title="Go BAck" onPress={() => navigation.goBack()} />
        <TextInput
          style={styles.input}
          onChangeText={(title) => setParams({ title, mode: 'edit' })}
          onEndEditing={() => setParams({ mode: 'end' })}
        />
        <Button
          title="Change Theme"
          onPress={() =>
            navigation.setParams({
              theme: {
                activeTintColor: 'orange',
                updateTime: new Date().getTime(),
              },
            })
          }
        />
      </View>
    );
  }
}

export default Page02;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    marginTop: 20,
    borderColor: 'black',
  },
});
