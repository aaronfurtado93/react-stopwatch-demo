/**
 * @flow
 * Import Node Modules
 */

import React, {Component} from 'react';

import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

export default class StartStopButton extends Component {
  handleStartStopPress () {

  }

  render() {
    return(
      <TouchableHighlight
        underlayColor="lightgray"
        style={style.container}
        onPress={this.handleStartStopPress}>
        <Text>
          Start
        </Text>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderColor: "#000",
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});