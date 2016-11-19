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
  constructor(props) {
    super(props);
  }

  startStopButtonColor() {
    if (this.props.getRunningState()) {
      return {
        borderColor: "red"
      };
    }
    return {
      borderColor: "green"
    };
  }

  handleStartStopPress () {
    console.log("StartStopButton pressed");

    if (this.props.getRunningState()) {
      clearInterval(this.interval);

      this.props.setRunningState(false);

      return;
    }

    this.props.setStartTime();
    this.props.setLapTimes([]);

    this.interval = setInterval(() => {
      this.props.setTimeElapsed(new Date() - this.props.getStartTime());
    }, 30)

    this.props.setRunningState(true);
  }

  render() {
    return(
      <TouchableHighlight
        underlayColor="lightgray"
        style={[
          style.startStopButton,
          this.startStopButtonColor()
        ]}
        onPress={this.handleStartStopPress.bind(this)}>
        <Text>
          {this.props.getRunningState() ? "Stop" : "Start"}
        </Text>
      </TouchableHighlight>
    )
  }
}

const style = StyleSheet.create({
  startStopButton: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  }
});
