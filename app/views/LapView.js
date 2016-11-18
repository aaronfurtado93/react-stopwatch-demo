/**
 * @flow
 * Import Node Modules
 */

import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class LapView extends Component {
  render() {
    return(
      <View style={this.props.style}>
        <Text>
          List of Laps here...
        </Text>
      </View>
    )
  }
}
