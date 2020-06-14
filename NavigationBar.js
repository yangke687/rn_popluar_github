import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  ViewPropTypes,
} from 'react-native';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

const statusBarShape = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden: PropTypes.bool,
};

export default class extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    hidden: PropTypes.boo,
    leftButton: PropTypes.element,
    rightButton: PropTypes.element,
    statusBar: PropTypes.shape(statusBarShape),
  };

  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hidden: false,
    };
  }

  render() {
    const { titleView, title, leftButton, rightButton, statusBar } = this.props;
    const titleEl = titleView ? (
      titleView
    ) : (
      <Text style={styles.title}>{title}</Text>
    );
    const contentEl = (
      <View style={styles.navBar}>
        {leftButton}
        <View style={styles.titleView}>{titleEl}</View>
        {rightButton}
      </View>
    );

    return (
      <View style={[styles.container, this.props.style]}>
        <View style={[styles.statusBar, statusBar]}>
          <StatusBar {...statusBar} />
        </View>
        {contentEl}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
  },
  titleView: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: 40,
    right: 40,
    // top: 0,
    // bottom: 0,
  },
  title: {
    fontSize: 20,
    color: 'white',
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0,
  },
});
