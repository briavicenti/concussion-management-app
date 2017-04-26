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
  gAccent1,
  gAccent2,
  gAccent3,
  bg,
} from '../assets/styles';
import SymReportDropdown from '../components/SymReportDropdown';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SymReports extends React.Component {

  renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Report {index+1}: {section.reportDate} {index==0 && <Text>(Baseline)</Text>}</Text>
        <Icon name={isActive ? 'angle-down' : 'angle-up'} size={30} color={'#fff'}/>
      </View>
    );
  }

  renderContent = (section) => {
    return (
      <View style={styles.content}>
        <SymReportDropdown report={section}/>
      </View>
    );
  }

  render() {

    var sections = [];

    if (this.props.reportDates) {
      var sections = this.props.reportDates.map((currDate, index) => {
        return ({
          reportDate: (currDate.getMonth()+1)+"/"+currDate.getDate()+"/"+currDate.getFullYear(),
          Headache: this.props.symptomRatings.Headache[index],
          NauseaVomiting: this.props.symptomRatings.NauseaVomiting[index],
          BalanceProblems: this.props.symptomRatings.BalanceProblems[index],
          Dizziness: this.props.symptomRatings.Dizziness[index],
          Fatigue: this.props.symptomRatings.Fatigue[index],
          TroubleFallingAsleep: this.props.symptomRatings.TroubleFallingAsleep[index],
          IncreasedSleep: this.props.symptomRatings.IncreasedSleep[index],
          DecreasedSleep: this.props.symptomRatings.DecreasedSleep[index],
          Drowsiness: this.props.symptomRatings.Drowsiness[index],
          SensitivityToLight: this.props.symptomRatings.SensitivityToLight[index],
          SensitivityToNoise: this.props.symptomRatings.SensitivityToNoise[index],
          Irritability: this.props.symptomRatings.Irritability[index],
          Sadness: this.props.symptomRatings.Sadness[index],
          Anxiety: this.props.symptomRatings.Anxiety[index],
          FeelingEmotional: this.props.symptomRatings.FeelingEmotional[index],
          NumbnessTingling: this.props.symptomRatings.NumbnessTingling[index],
          FeelingSluggish: this.props.symptomRatings.FeelingSluggish[index],
          FeelingDazed: this.props.symptomRatings.FeelingDazed[index],
          DifficultyConcentrating: this.props.symptomRatings.DifficultyConcentrating[index],
          DifficultyRemembering: this.props.symptomRatings.DifficultyRemembering[index],
          VisionProblems: this.props.symptomRatings.VisionProblems[index],
        });
      });
    }

    return (

      <View style={{backgroundColor: '#fff', marginHorizontal: 20, padding: 20}}>
        <Text style={{color: gAccent2, fontSize: 20, fontWeight: 'bold', marginBottom: 15, alignSelf: 'center'}}>Individual Symptom Reports</Text>

        <Accordion
          sections={sections}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingBottom: 10,
  },
  header: {
    backgroundColor: gAccent1,
    marginVertical: 2,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    backgroundColor: bg,
  }
});

SymReports = connect(store => ({symptomRatings: store.symptomRatings, reportDates: store.reportDates, concussionInfo: store.concussionInfo}),
                 )(SymReports);

