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
  render() {
    return (
      <View style={style.container}>
        <WatchView style={style.watchView}/>
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
