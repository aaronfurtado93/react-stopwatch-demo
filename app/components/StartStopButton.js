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
    this.state = {
      isRunning: false
    };
  }

  startStopButtonColor() {
    if (this.state.isRunning) {
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

    if (this.state.isRunning) {
      clearInterval(this.interval);

      this.setState({
        isRunning: false
      });

      return;
    }

    this.props.setStartTime();
    this.props.setLapTimes([]);

    this.interval = setInterval(() => {
      this.props.setTimeElapsed(new Date() - this.props.getStartTime());
    }, 30)

    this.setState({
      isRunning: true
    });
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
          {this.state.isRunning ? "Stop" : "Start"}
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
