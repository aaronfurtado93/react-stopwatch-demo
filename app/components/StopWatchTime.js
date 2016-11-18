/**
 * @flow
 * Import Node Modules
 */

import formatTime from 'minutes-seconds-milliseconds';

import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

/**
 * Import Views
 */

 /**
  * Import Components
  */

 /**
  * Export Main Class
  */


export default class StopWatchTime extends Component {
  render() {
    return(
      <View style={[this.props.style, style.container]}>
        <Text style={style.stopWatchTime}>
          {formatTime(this.props.getTimeElapsed())}
        </Text>
      </View>
    )
  }
}

/**
 * Define Styles
 */

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  stopWatchTime: {
    fontSize: 50
  }
});
