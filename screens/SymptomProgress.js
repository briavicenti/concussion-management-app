import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import TotalSymptomsGraph from '../components/TotalSymptomsGraph';

export default class SymptomProgress extends React.Component {
  
  static navigationOptions = {
    title: 'Symptom Progress',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (

      // Total symptoms to date: bar chart of 4 symptoms
      <View>
      <Text>Meow</Text>

      <TotalSymptomsGraph test={true}/>

      </View>

      // Symptoms per report: stacked bar chart per report

      // Key symptoms: 3 top symptoms 
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

SymptomProgress = connect(store => ({symptomRatings: store.symptomRatings, concussionInfo: store.concussionInfo || {}}),
                 )(SymptomProgress);