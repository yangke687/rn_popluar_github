import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const CITY_NAMES = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '苏州',
  '成都',
  '武汉',
  '重庆',
];

export default class extends Component {
  state = {
    dataArray: CITY_NAMES,
    isLoading: false,
  };

  _renderItem({ item }) {
    return (
      <View style={styles.item}>
        <Text style={styles.text}>{item}</Text>
      </View>
    );
  }

  /** 下拉刷新 */
  loadData() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      const dataArray = [];
      dataArray.push('昆明');
      dataArray.push('南宁');
      dataArray.push('都江堰');
      dataArray.push('乐山');
      dataArray.push('眉山');
      this.setState({
        isLoading: false,
        dataArray,
      });
    }, 2000);
  }

  /** 底部加载 Spinner */
  genIndicator() {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator
          style={styles.indicator}
          color="red"
          size="large"
          animating={true}
        />
        <Text>加载中...</Text>
      </View>
    );
  }

  /** 底部加载数据 */
  appendData() {
    const arr = [];
    arr.push(
      `新城市${this.state.dataArray.length}`,
      `新城市${this.state.dataArray.length + 1}`,
      `新城市${this.state.dataArray.length + 2}`
    );
    setTimeout(() => {
      this.setState({
        dataArray: [...this.state.dataArray, ...arr],
      });
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataArray}
          renderItem={(dataItem) => this._renderItem(dataItem)}
          // refreshing={this.state.isLoading}
          // onRefresh={() => this.loadData()}
          refreshControl={
            <RefreshControl
              title="加载中"
              colors={['red']}
              tintColor={'orange'}
              titleColor="red"
              refreshing={this.state.isLoading}
              onRefresh={() => this.loadData()}
            />
          }
          ListFooterComponent={() => this.genIndicator()}
          onEndReached={() => this.appendData()}
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
    backgroundColor: '#169',
    height: 200,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  indicatorContainer: {
    alignItems: 'center',
  },
  indicator: {
    margin: 10,
  },
});
