import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const CITY_NAMES = [
  {
    data: ['北京', '上海', '广州', '深圳'],
    title: '一线城市',
  },

  {
    data: ['苏州', '武汉', '成都', '杭州'],
    title: '二三线城市',
  },

  {
    data: ['洛阳', '厦门', '青岛', '拉萨'],
    title: '三四线城市',
  },
];

export default class extends Component {
  renderSectionHeader({ section: { title } }) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }

  _renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={CITY_NAMES}
          renderItem={(dataItem) => this._renderItem(dataItem)}
          renderSectionHeader={(data) => this.renderSectionHeader(data)}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#333',
    fontSize: 20,
  },
  sectionHeader: {
    height: 50,
    backgroundColor: '#93ebbe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
});
