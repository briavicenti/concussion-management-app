import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import ColoredButton from '../components/ColoredButton';
import Headache from '../components/symptoms/Headache';
import NauseaVomiting from '../components/symptoms/NauseaVomiting';
import BalanceProblems from '../components/symptoms/BalanceProblems';
import Dizziness from '../components/symptoms/Dizziness';
import Fatigue from '../components/symptoms/Fatigue';
import TroubleFallingAsleep from '../components/symptoms/TroubleFallingAsleep';
import IncreasedSleep from '../components/symptoms/IncreasedSleep';
import DecreasedSleep from '../components/symptoms/DecreasedSleep';
import Drowsiness from '../components/symptoms/Drowsiness';
import SensitivityToLight from '../components/symptoms/SensitivityToLight';
import SensitivityToNoise from '../components/symptoms/SensitivityToNoise';
import Irritability from '../components/symptoms/Irritability';
import Sadness from '../components/symptoms/Sadness';
import Anxiety from '../components/symptoms/Anxiety';
import FeelingEmotional from '../components/symptoms/FeelingEmotional';
import NumbnessTingling from '../components/symptoms/NumbnessTingling';
import FeelingSluggish from '../components/symptoms/FeelingSluggish';
import FeelingDazed from '../components/symptoms/FeelingDazed';
import DifficultyConcentrating from '../components/symptoms/DifficultyConcentrating';
import DifficultyRemembering from '../components/symptoms/DifficultyRemembering';
import VisionProblems from '../components/symptoms/DifficultyRemembering';

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

const symptomComponents = {
  Headache: Headache,
  NauseaVomiting: NauseaVomiting,
  BalanceProblems: BalanceProblems,
  Dizziness: Dizziness,
  Fatigue: Fatigue,
  TroubleFallingAsleep: TroubleFallingAsleep,
  IncreasedSleep: IncreasedSleep,
  DecreasedSleep: DecreasedSleep,
  Drowsiness: Drowsiness,
  SensitivityToLight: SensitivityToLight,
  SensitivityToNoise: SensitivityToNoise,
  Irritability: Irritability,
  Sadness: Sadness,
  Anxiety: Anxiety,
  FeelingEmotional: FeelingEmotional,
  NumbnessTingling: NumbnessTingling,
  FeelingSluggish: FeelingSluggish,
  FeelingDazed: FeelingDazed,
  DifficultyConcentrating: DifficultyConcentrating,
  DifficultyRemembering: DifficultyRemembering,
  VisionProblems: VisionProblems,
}

export default class SymptomTest extends React.Component {
  
  static navigationOptions = {
    title: 'Symptom Test',
  };

  state = {
    symList: shuffleArray(['Headache', 'NauseaVomiting', 'BalanceProblems', 'Dizziness', 'Fatigue', 'TroubleFallingAsleep', 'IncreasedSleep', 'DecreasedSleep', 'Drowsiness', 'SensitivityToLight', 'SensitivityToNoise', 'Irritability', 'Sadness', 'Anxiety', 'FeelingEmotional', 'NumbnessTingling', 'FeelingSluggish', 'FeelingDazed', 'DifficultyConcentrating', 'DifficultyRemembering', 'VisionProblems']),
    symNum: 0,
  }

  render() {

    const SymptomComponent = symptomComponents[this.state.symList[this.state.symNum]];

    return (

      <View>

      {(this.state.symNum <= this.state.symList.length-1) && <SymptomComponent symName={this.state.symList[this.state.symNum]} onSubmit={() => this.setState({symNum: this.state.symNum+=1})}/> }

      {this.state.symNum > this.state.symList.length-1 &&
      <View style={styles.container}>
      <Text style={{fontSize: 30, backgroundColor: '#fff', padding: 20, margin: 20,}}>You have completed all {this.state.symNum} symptom check cards.</Text> 
      <ColoredButton 
          onPress={() => { this.props.navigation.navigate('SHome'); }}>
      Submit Ratings
      </ColoredButton>
      </View>
      }

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
