import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  Header1,
} from '../components/TextComponents';
import TotalSymptomsGraph from '../components/TotalSymptomsGraph';
import SymReports from '../components/SymReports';

export default class SymptomProgress extends React.Component {
  
  static navigationOptions = {
    title: 'Symptom Progress',
  };

  render() {
    const { navigate } = this.props.navigation;

    console.log(this.props.concussionInfo);
    console.log(this.props.symptomRatings);
    console.log(this.props.reportDates);

    return (

      <ScrollView>

      <Header1 style={{alignSelf: 'center', marginTop: 10}}>Symptom Progress</Header1>
      <TotalSymptomsGraph/>
      
      <SymReports/>

      </ScrollView>

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

SymptomProgress = connect(store => ({symptomRatings: store.symptomRatings, reportDates: store.reportDates, concussionInfo: store.concussionInfo || {}}),
                 )(SymptomProgress);