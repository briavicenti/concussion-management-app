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
} from '../assets/styles';
import { Bar } from 'react-native-pathjs-charts';


export default class TotalSymptomsGraph extends React.Component {

  render() {
    //const { navigate } = this.props.navigation;

    var totalP = 0;
    var totalS = 0;
    var totalC = 0;
    var totalE = 0;

    for (var sym in this.props.symptomRatings) {
      switch(sym) {
        case 'Headache':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'NauseaVomiting':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'BalanceProblems':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'Dizziness':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'Fatigue':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'TroubleFallingAsleep':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalS+=this.props.symptomRatings[sym][i];
          } break;
        case 'IncreasedSleep':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalS+=this.props.symptomRatings[sym][i];
          } break;
        case 'DecreasedSleep':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalS+=this.props.symptomRatings[sym][i];
          } break;
        case 'Drowsiness':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalS+=this.props.symptomRatings[sym][i];
          } break;
        case 'SensitivityToLight':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'SensitivityToNoise':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'Irritability':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalE+=this.props.symptomRatings[sym][i];
          } break;
        case 'Sadness':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalE+=this.props.symptomRatings[sym][i];
          } break;
        case 'Anxiety':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalE+=this.props.symptomRatings[sym][i];
          } break;
        case 'FeelingEmotional':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalE+=this.props.symptomRatings[sym][i];
          } break;
        case 'NumbnessTingling':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
        case 'FeelingSluggish':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalC+=this.props.symptomRatings[sym][i];
          } break;
        case 'FeelingDazed':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalC+=this.props.symptomRatings[sym][i];
          } break;
        case 'DifficultyConcentrating':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalC+=this.props.symptomRatings[sym][i];
          } break;
        case 'DifficultyRemembering':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalC+=this.props.symptomRatings[sym][i];
          } break;
        case 'VisionProblems':
          for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
            totalP+=this.props.symptomRatings[sym][i];
          } break;
      }
    }

    if (this.props.test) {
      totalP = 22;
      totalS = 6;
      totalC = 8;
      totalE = 17;
    }

    console.log("Total P: "+totalP);
    console.log("Total S: "+totalS);
    console.log("Total C: "+totalC);
    console.log("Total E: "+totalE);

    let data = [
      [{
       "v": totalE,
       "name": "Emotional"
      }],
      [{
       "v": totalS,
       "name": "Sleep"
      }],
      [{
       "v": totalC,
       "name": "Cognitive"
      }],
      [{
       "v": totalP,
       "name": "Physical"
      }],
    ]

    let pallete = [
      {'r': 50, 'g': 143, 'b': 156}, // teal
      {'r': 21, 'g': 86, 'b': 117}, // navy
      {'r': 0, 'g': 117, 'b': 91}, // jade
      {'r': 90, 'g': 170, 'b': 122}, // lime
    ]

    let options = {
      width: 250,
      height: 200,
      margin: {
        top: 20,
        left: 25,
        bottom: 50,
        right: 20
      },
      color: cAccent1,
      //pallete: pallete,
      gutter: 20,
      // animate: {
      //   type: 'oneByOne',
      //   duration: 200,
      //   fillTransition: 3
      // },
      axisX: {
        showAxis: true,
        showLines: false,
        showLabels: false,
        showTicks: false,
        zeroAxis: false,
        orient: 'bottom',
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: false,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: false,
        showLines: false,
        showLabels: false,
        showTicks: false,
        zeroAxis: false,
        orient: 'left',
        label: {
          fontFamily: 'Arial',
          fontSize: 16,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }

    return (

      // Total symptoms to date: bar chart of 4 symptoms
      <View style={{backgroundColor: '#fff', margin: 20, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: gAccent1, fontSize: 24, fontWeight: 'bold', marginTop: 15}}>Total Symptoms to Date</Text>

      <Bar data={data} options={options} pallete={pallete} accessorKey='v'/>

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
});

TotalSymptomsGraph = connect(store => ({symptomRatings: store.symptomRatings, concussionInfo: store.concussionInfo || {}}),
                 )(TotalSymptomsGraph);