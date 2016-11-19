/**
 * @flow
 * Import Node Modules
 */

import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native';

import LapTime from '../components/LapTime.js';

export default class LapView extends Component {
  render() {
    return(
      <View style={this.props.style}>
        {this.props.getLapTimes().map((lapTime, index) => <LapTime key={index} id={index} lapTime={lapTime}/>)}
      </View>
    )
  }
}
