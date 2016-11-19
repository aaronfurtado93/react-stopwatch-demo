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

/**
 * Import Components
 */

import StartStopButton from '../components/StartStopButton.js';
import LapButton from '../components/LapButton.js';

/**
 * Export Main Class
 */

export default class ControlButtonsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: null
    };
  }

  getStartTime() {
    return this.state.startTime;
  }

  setStartTime() {
    this.setState({
      startTime: new Date()
    })
  }

  render() {
    return (
      <View style={[this.props.style, style.container]}>
        <StartStopButton
          getStartTime={this.getStartTime.bind(this)}
          setStartTime={this.setStartTime.bind(this)}
          setTimeElapsed={this.props.setTimeElapsed.bind(this)}
          setLapTimes={this.props.setLapTimes.bind(this)}
          />
        <LapButton
          setStartTime={this.setStartTime.bind(this)}
          getTimeElapsed={this.props.getTimeElapsed.bind(this)}
          setLapTimes={this.props.setLapTimes.bind(this)}
          getLapTimes={this.props.getLapTimes.bind(this)}
          />
      </View>
    )
  }
}

/**
 * Define Styles
 */

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  startStopButton: {},
});
