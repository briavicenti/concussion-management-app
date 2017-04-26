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
        <Text style={styles.headerText}>Report {index+1}: {section.reportDate}</Text>
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

    var sections = [
      // TotalE: 9
      // TotalS: 8
      // TotalC: 8
      // TotalP: 11
      {
        reportDate: "04/25/17",
        Headache: 2,
        NauseaVomiting: 1,
        BalanceProblems: 1,
        Dizziness: 2,
        Fatigue: 0,
        TroubleFallingAsleep: 3,
        IncreasedSleep: 0,
        DecreasedSleep: 2,
        Drowsiness: 3,
        SensitivityToLight: 1,
        SensitivityToNoise: 2,
        Irritability: 0,
        Sadness: 3,
        Anxiety: 4,
        FeelingEmotional: 2,
        NumbnessTingling: 0,
        FeelingSluggish: 1,
        FeelingDazed: 2,
        DifficultyConcentrating: 5,
        DifficultyRemembering: 0,
        VisionProblems: 2,
      },
      // TotalE: 10
      // TotalS: 5
      // TotalC: 7
      // TotalP: 7
      {
        reportDate: "04/27/17",
        Headache: 1,
        NauseaVomiting: 0,
        BalanceProblems: 2,
        Dizziness: 0,
        Fatigue: 2,
        TroubleFallingAsleep: 2,
        IncreasedSleep: 0,
        DecreasedSleep: 2,
        Drowsiness: 1,
        SensitivityToLight: 1,
        SensitivityToNoise: 1,
        Irritability: 2,
        Sadness: 2,
        Anxiety: 2,
        FeelingEmotional: 4,
        NumbnessTingling: 0,
        FeelingSluggish: 1,
        FeelingDazed: 1,
        DifficultyConcentrating: 2,
        DifficultyRemembering: 1,
        VisionProblems: 0,
      },
    ];    

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
    // borderBottomWidth: 1,
    // borderColor: '#fff',
    marginVertical: 2,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    //fontWeight: 'bold',
  },
  content: {
    backgroundColor: bg,
  }
});

SymReports = connect(store => ({symptomRatings: store.symptomRatings, reportDates: store.reportDates, concussionInfo: store.concussionInfo}),
                 )(SymReports);

