/**
 * @flow
 * Import Node Modules
 */

import React, {Component} from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

/**
 * Import Views
 */

import WatchView from '../views/WatchView.js';
import LapView from '../views/LapView.js';

/**
 * Import Components
 */

/**
 * Export Main Class
 */

export default class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: null
    };
  }

  getTimeElapsed() {
    return this.state.timeElapsed;
  }

  setTimeElapsed(time) {
    this.setState({
      timeElapsed: time
    });
  }

  render() {
    return (
      <View style={style.container}>
        <WatchView style={style.watchView}
          getTimeElapsed={this.getTimeElapsed.bind(this)}
          setTimeElapsed={this.setTimeElapsed.bind(this)}/>
        <LapView style={style.lapView}/>
      </View>
    );
  }
}

/**
 * Define Styles
 */

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  watchView: {
    flex: 1,
  },
  lapView: {
    flex: 1,
  },
})
