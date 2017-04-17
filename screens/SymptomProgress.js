import React from 'react';
//import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import { 
  VictoryBar,
  VictoryPie,
  VictoryChart,
  VictoryArea,
  VictoryStack } from 'victory-native';

export default class SymptomProgress extends React.Component {
  
  static navigationOptions = {
    title: 'Symptom Progress',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (

      <Text>Meow</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
