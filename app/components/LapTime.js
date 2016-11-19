import formatTime from 'minutes-seconds-milliseconds';

import React, {Component} from 'react';

import {
  View,
  Text
} from 'react-native';

export default class LapTime extends Component {
  render() {
    return(
      <View style={this.props.style}>
        <Text>
          #{this.props.id} {formatTime(this.props.lapTime)}
        </Text>
      </View>
    )
  }
}
