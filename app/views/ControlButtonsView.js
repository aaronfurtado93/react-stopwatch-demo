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
  render() {
    return (
      <View style={[this.props.style, style.container]}>
        <StartStopButton />
        <LapButton />
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
