import formatTime from 'minutes-seconds-milliseconds';

import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class LapTime extends Component {
  render() {
    return(
      <View style={style.lapContainer}>
        <Text style={style.lapText}>
          Lap #{this.props.id + 1}
        </Text>
        <Text style={style.lapText}>
          {formatTime(this.props.lapTime)}
        </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  lapContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  lapText: {
    fontSize: 30,
  }
})
