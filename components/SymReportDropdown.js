import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  cAccent1,
  cAccent2,
  cAccent3,
  cAccent4,
  cAccent5,
  gAccent2,
} from '../assets/styles';
import { Bar } from 'react-native-pathjs-charts';


export default class SymReportDropdown extends React.Component {

  render() {

    return (

      // Total symptoms to date: bar chart of 4 symptoms
      <Text>Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content
      Content Content Content Content Content Content Content Content</Text>

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

SymReportDropdown = connect(store => ({symptomRatings: store.symptomRatings, concussionInfo: store.concussionInfo || {}}),
                 )(SymReportDropdown);