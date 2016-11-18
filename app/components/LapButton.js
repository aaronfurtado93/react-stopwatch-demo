/**
 * @flow
 * Import Node Modules
 */

import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class LapButton extends Component {
  handleLap () {
    console.log("LapButton pressed");
  }

  render() {
    return(
        <TouchableHighlight
          underlayColor="lightgray"
          style={style.lapButton}
          onPress={this.handleLap}>
          <Text>
            Lap
          </Text>
        </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  lapButton: {
    width: 100,
    height: 100,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
