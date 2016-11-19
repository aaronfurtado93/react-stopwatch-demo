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
      timeElapsed: null,
      lapTimes: []
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

  getLapTimes(lapTimes) {
    return this.state.lapTimes;
  }

  setLapTimes(lapTimes) {
    this.setState({
      lapTimes: lapTimes
    });
  }

  render() {
    return (
      <View style={style.container}>
        <WatchView style={style.watchView}
          getTimeElapsed={this.getTimeElapsed.bind(this)}
          setTimeElapsed={this.setTimeElapsed.bind(this)}
          setLapTimes={this.setLapTimes.bind(this)}
          getLapTimes={this.getLapTimes.bind(this)}
          />
        <LapView style={style.lapView}
          lapTimes={this.state.lapTimes}
          />
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
