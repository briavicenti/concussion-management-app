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
} from '../assets/styles';
import { Bar } from 'react-native-pathjs-charts';


export default class TotalSymptomsGraph extends React.Component {

  render() {

    var totalE = 0;
    var totalS = 0;
    var totalC = 0;
    var totalP = 0;

    if (this.props.symptomRatings != null) {

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
    }

    var hasSym = (totalE > 0) || (totalC > 0) || (totalP > 0) || (totalS > 0);

    let data = [
      [{
       "v": totalE,
       "name": totalE,
      }],
      [{
       "v": totalS,
       "name": totalS,
      }],
      [{
       "v": totalC,
       "name": totalC,
      }],
      [{
       "v": totalP,
       "name": totalP,
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
        bottom: 10,
        right: 20
      },
      color: cAccent1,
      gutter: 20,
      animate: {
        type: 'oneByOne',
        duration: 200,
        fillTransition: 3
      },
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
      <View style={{backgroundColor: '#fff', margin: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 10,}}>
        <Text style={{color: gAccent2, fontSize: 24, fontWeight: 'bold', marginTop: 15}}>Total Symptoms to Date</Text>
        
        {hasSym && (
        <View>
          <Bar data={data} options={options} pallete={pallete} accessorKey='v'/>

          <View style={{alignSelf: 'center', width: 250, flexDirection: 'row', marginBottom: 15,}}>
          <Text style={{color: cAccent1, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalE}</Text>
          <Text style={{color: cAccent2, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalS}</Text>
          <Text style={{color: cAccent4, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalC}</Text>
          <Text style={{color: cAccent5, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalP}</Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
              <View style={{backgroundColor: cAccent1, height: 25, width: 30, marginRight: 10,}}/>
              <Text style={{color: cAccent1, fontSize: 18,}}>Emotional Symptom Ratings</Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
              <View style={{backgroundColor: cAccent2, height: 25, width: 30, marginRight: 10,}}/>
              <Text style={{color: cAccent2, fontSize: 18,}}>Sleep Symptom Ratings</Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
              <View style={{backgroundColor: cAccent4, height: 25, width: 30, marginRight: 10,}}/>
              <Text style={{color: cAccent4, fontSize: 18,}}>Cognitive Symptom Ratings</Text>
          </View>

          <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
              <View style={{backgroundColor: cAccent5, height: 25, width: 30, marginRight: 10,}}/>
              <Text style={{color: cAccent5, fontSize: 18,}}>Physical Symptom Ratings</Text>
          </View>
        </View>)}

        {(!hasSym && 
          <View style={{backgroundColor: gAccent1, marginHorizontal: 10, marginVertical: 20, padding: 10, flex: 1}}>
            <Text style={{color: '#fff', fontSize: 20, textAlign: 'center',}}>No symptoms reported.</Text>
          </View>
        )}

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