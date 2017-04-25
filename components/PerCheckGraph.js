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
import { StockLine, SmoothLine } from 'react-native-pathjs-charts';


export default class TotalSymptomsGraph extends React.Component {

  render() {
    //const { navigate } = this.props.navigation;

    // var totalP = 0;
    // var totalS = 0;
    // var totalC = 0;
    // var totalE = 0;

    // for (var sym in this.props.symptomRatings) {
    //   switch(sym) {
    //     case 'Headache':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'NauseaVomiting':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'BalanceProblems':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Dizziness':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Fatigue':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'TroubleFallingAsleep':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalS+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'IncreasedSleep':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalS+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'DecreasedSleep':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalS+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Drowsiness':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalS+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'SensitivityToLight':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'SensitivityToNoise':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Irritability':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalE+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Sadness':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalE+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'Anxiety':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalE+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'FeelingEmotional':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalE+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'NumbnessTingling':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'FeelingSluggish':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalC+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'FeelingDazed':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalC+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'DifficultyConcentrating':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalC+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'DifficultyRemembering':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalC+=this.props.symptomRatings[sym][i];
    //       } break;
    //     case 'VisionProblems':
    //       for (i = 0; i < this.props.symptomRatings[sym].length; i++) {
    //         totalP+=this.props.symptomRatings[sym][i];
    //       } break;
    //   }
    // }

    // if (this.props.test) {
    //   totalP = 22;
    //   totalS = 6;
    //   totalC = 8;
    //   totalE = 17;
    // }

    // let data = [
    //   [{
    //    "v": totalE,
    //    "name": totalE,
    //   }],
    //   [{
    //    "v": totalS,
    //    "name": totalS,
    //   }],
    //   [{
    //    "v": totalC,
    //    "name": totalC,
    //   }],
    //   [{
    //    "v": totalP,
    //    "name": totalP,
    //   }],
    // ]

    let pallete = [
      {'r': 50, 'g': 143, 'b': 156}, // teal
      {'r': 21, 'g': 86, 'b': 117}, // navy
      {'r': 0, 'g': 117, 'b': 91}, // jade
      {'r': 90, 'g': 170, 'b': 122}, // lime
    ]

    // let options = {
    //   width: 250,
    //   height: 200,
    //   margin: {
    //     top: 20,
    //     left: 25,
    //     bottom: 10,
    //     right: 20
    //   },
    //   color: cAccent1,
    //   //pallete: pallete,
    //   gutter: 20,
    //   // animate: {
    //   //   type: 'oneByOne',
    //   //   duration: 200,
    //   //   fillTransition: 3
    //   // },
    //   axisX: {
    //     showAxis: true,
    //     showLines: false,
    //     showLabels: false,
    //     showTicks: false,
    //     zeroAxis: false,
    //     orient: 'bottom',
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 8,
    //       fontWeight: false,
    //       fill: '#34495E'
    //     }
    //   },
    //   axisY: {
    //     showAxis: false,
    //     showLines: false,
    //     showLabels: false,
    //     showTicks: false,
    //     zeroAxis: false,
    //     orient: 'left',
    //     label: {
    //       fontFamily: 'Arial',
    //       fontSize: 16,
    //       fontWeight: true,
    //       fill: '#34495E'
    //     }
    //   }
    // }

    let data = [
      [{
        "x": 0,
        "y": 47782
      }, {
        "x": 1,
        "y": 48497
      }, {
        "x": 2,
        "y": 77128
      }, {
        "x": 3,
        "y": 73413
      }, {
        "x": 4,
        "y": 58257
      }, {
        "x": 5,
        "y": 40579
      }, {
        "x": 6,
        "y": 72893
      }, {
        "x": 7,
        "y": 60663
      }, {
        "x": 8,
        "y": 15715
      }, {
        "x": 9,
        "y": 40305
      }, {
        "x": 10,
        "y": 68592
      }, {
        "x": 11,
        "y": 95664
      }, {
        "x": 12,
        "y": 17908
      }, {
        "x": 13,
        "y": 22838
      }, {
        "x": 14,
        "y": 32153
      }, {
        "x": 15,
        "y": 56594
      }, {
        "x": 16,
        "y": 76348
      }, {
        "x": 17,
        "y": 46222
      }, {
        "x": 18,
        "y": 59304
      }],
      [{
        "x": 0,
        "y": 132189
      }, {
        "x": 1,
        "y": 61705
      }, {
        "x": 2,
        "y": 154976
      }, {
        "x": 3,
        "y": 81304
      }, {
        "x": 4,
        "y": 172572
      }, {
        "x": 5,
        "y": 140656
      }, {
        "x": 6,
        "y": 148606
      }, {
        "x": 7,
        "y": 53010
      }, {
        "x": 8,
        "y": 110783
      }, {
        "x": 9,
        "y": 196446
      }, {
        "x": 10,
        "y": 117057
      }, {
        "x": 11,
        "y": 186765
      }, {
        "x": 12,
        "y": 174908
      }, {
        "x": 13,
        "y": 75247
      }, {
        "x": 14,
        "y": 192894
      }, {
        "x": 15,
        "y": 150356
      }, {
        "x": 16,
        "y": 180360
      }, {
        "x": 17,
        "y": 175697
      }, {
        "x": 18,
        "y": 114967
      }],
      [{
        "x": 0,
        "y": 125797
      }, {
        "x": 1,
        "y": 256656
      }, {
        "x": 2,
        "y": 222260
      }, {
        "x": 3,
        "y": 265642
      }, {
        "x": 4,
        "y": 263902
      }, {
        "x": 5,
        "y": 113453
      }, {
        "x": 6,
        "y": 289461
      }, {
        "x": 7,
        "y": 293850
      }, {
        "x": 8,
        "y": 206079
      }, {
        "x": 9,
        "y": 240859
      }, {
        "x": 10,
        "y": 152776
      }, {
        "x": 11,
        "y": 297282
      }, {
        "x": 12,
        "y": 175177
      }, {
        "x": 13,
        "y": 169233
      }, {
        "x": 14,
        "y": 237827
      }, {
        "x": 15,
        "y": 242429
      }, {
        "x": 16,
        "y": 218230
      }, {
        "x": 17,
        "y": 161511
      }, {
        "x": 18,
        "y": 153227
      }]
    ]
    let options = {
      width: 250,
      height: 250,
      color: '#2980B9',
      margin: {
        top: 10,
        left: 35,
        bottom: 30,
        right: 10
      },
      animate: {
        type: 'delayed',
        duration: 200
      },
      axisX: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'bottom',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      },
      axisY: {
        showAxis: true,
        showLines: true,
        showLabels: true,
        showTicks: true,
        zeroAxis: false,
        orient: 'left',
        tickValues: [],
        label: {
          fontFamily: 'Arial',
          fontSize: 8,
          fontWeight: true,
          fill: '#34495E'
        }
      }
    }


    return (

      // Total symptoms to date: bar chart of 4 symptoms
      <View style={{backgroundColor: '#fff', margin: 20, alignItems: 'center', justifyContent: 'center', paddingBottom: 10,}}>
        <Text style={{color: gAccent2, fontSize: 24, fontWeight: 'bold', marginTop: 15}}>Total Symptoms to Date</Text>

        <StockLine data={data} options={options}  pallete={pallete} xKey='x' yKey='y' />

        {/*}

        <View style={{alignSelf: 'center', width: 250, flexDirection: 'row', marginBottom: 15,}}>
        <Text style={{color: cAccent1, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalE}</Text>
        <Text style={{color: cAccent2, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalS}</Text>
        <Text style={{color: cAccent4, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalC}</Text>
        <Text style={{color: cAccent5, fontWeight: 'bold', fontSize: 20, flex: 1, textAlign: 'center'}}>{totalP}</Text>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
            <View style={{backgroundColor: cAccent1, height: 25, width: 30, marginRight: 10,}}/>
            <Text style={{color: cAccent1, fontSize: 18,}}>Emotional Symptoms Ratings</Text>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
            <View style={{backgroundColor: cAccent2, height: 25, width: 30, marginRight: 10,}}/>
            <Text style={{color: cAccent2, fontSize: 18,}}>Sleep Symptoms Ratings</Text>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
            <View style={{backgroundColor: cAccent4, height: 25, width: 30, marginRight: 10,}}/>
            <Text style={{color: cAccent4, fontSize: 18,}}>Cognitive Symptoms Ratings</Text>
        </View>

        <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 20, marginBottom: 5,}}>
            <View style={{backgroundColor: cAccent5, height: 25, width: 30, marginRight: 10,}}/>
            <Text style={{color: cAccent5, fontSize: 18,}}>Physical Symptoms Ratings</Text>
        </View>
      */}

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