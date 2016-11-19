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

import ControlButtonsView from './ControlButtonsView.js'

/**
 * Import Components
 */

import StopWatchTime from '../components/StopWatchTime.js'

/**
 * Export Main Class
 */

export default class WatchView extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <StopWatchTime style={style.stopWatchTime}
          getTimeElapsed={this.props.getTimeElapsed.bind(this)}
          />
        <ControlButtonsView style={style.controlButtonsView}
          getTimeElapsed={this.props.getTimeElapsed.bind(this)}
          setTimeElapsed={this.props.setTimeElapsed.bind(this)}
          setLapTimes={this.props.setLapTimes.bind(this)}
          getLapTimes={this.props.getLapTimes.bind(this)}
          />
      </View>
    );
  }
}

/**
 * Define Styles
 */

const style = StyleSheet.create({
   stopWatchTime: {
     flex: 3
   },
   controlButtonsView: {
     flex: 2
   }
 });
