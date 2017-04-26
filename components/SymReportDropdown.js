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
  gAccent1,
} from '../assets/styles';
import SymReportDropdownBox from '../components/SymReportDropdownBox';

export default class SymReportDropdown extends React.Component {

  render() {

    var hasE = ((this.props.report.Sadness > 0) || (this.props.report.Irritability > 0) || (this.props.report.Anxiety > 0) || (this.props.report.FeelingEmotional > 0));
    var hasS = ((this.props.report.TroubleFallingAsleep > 0) || (this.props.report.DecreasedSleep > 0) || (this.props.report.IncreasedSleep > 0) || (this.props.report.Drowsiness > 0));
    var hasC = ((this.props.report.FeelingDazed > 0) || (this.props.report.FeelingSluggish > 0) || (this.props.report.DifficultyConcentrating > 0) || (this.props.report.DifficultyRemembering > 0));
    var hasP = ((this.props.report.Headache > 0) || (this.props.report.NauseaVomiting > 0) || (this.props.report.Dizziness > 0) || (this.props.report.BalanceProblems > 0) || (this.props.report.SensitivityToLight > 0) || (this.props.report.SensitivityToNoise > 0) || (this.props.report.Fatigue > 0) || (this.props.report.NumbnessTingling > 0) || (this.props.report.VisionProblems > 0));
    var hasAny = (hasE || hasS || hasC || hasP);


    return (

      <View>

        {!hasAny && 
        (<View style={{backgroundColor: '#fff', padding: 5, margin: 5}}>
          <Text style={{color: gAccent1, fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>No symptoms reported.</Text>
        </View>)
        }

        {hasE && (  
        <View style={{backgroundColor: '#fff', padding: 5, margin: 5}}>
          <Text style={{color: cAccent1, fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>Emotional Symptoms</Text>
        </View>)}
        {(this.props.report.Sadness > 0) && <SymReportDropdownBox sym="Sadness" rating={this.props.report.Sadness} color={cAccent1}/>}
        {(this.props.report.Irritability > 0) && <SymReportDropdownBox sym="Irritability" rating={this.props.report.Irritability} color={cAccent1}/>}
        {(this.props.report.Anxiety > 0) && <SymReportDropdownBox sym="Anxiety" rating={this.props.report.Anxiety} color={cAccent1}/>}
        {(this.props.report.FeelingEmotional > 0) && <SymReportDropdownBox sym="Feeling Emotional" rating={this.props.report.FeelingEmotional} color={cAccent1}/>}
        

        {hasS && (
        <View style={{backgroundColor: '#fff', padding: 5, margin: 5}}>
          <Text style={{color: cAccent2, fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>Sleep Symptoms</Text>
        </View>)}
        {(this.props.report.TroubleFallingAsleep > 0) && <SymReportDropdownBox sym="Trouble Falling Asleep" rating={this.props.report.TroubleFallingAsleep} color={cAccent2}/>}
        {(this.props.report.DecreasedSleep > 0) && <SymReportDropdownBox sym="Decreased Sleep" rating={this.props.report.DecreasedSleep} color={cAccent2}/>}
        {(this.props.report.IncreasedSleep > 0) && <SymReportDropdownBox sym="Increased Sleep" rating={this.props.report.IncreasedSleep} color={cAccent2}/>}
        {(this.props.report.Drowsiness > 0) && <SymReportDropdownBox sym="Drowsiness" rating={this.props.report.Drowsiness} color={cAccent2}/>}        

        {hasC && (
        <View style={{backgroundColor: '#fff', padding: 5, margin: 5}}>
          <Text style={{color: cAccent4, fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>Cognitive Symptoms</Text>
        </View>)}
        {(this.props.report.FeelingDazed > 0) && <SymReportDropdownBox sym='Feeling Dazed / "Foggy"' rating={this.props.report.FeelingDazed} color={cAccent4}/>}
        {(this.props.report.FeelingSluggish > 0) && <SymReportDropdownBox sym='Feeling Sluggish / "Slowed Down"' rating={this.props.report.FeelingSluggish} color={cAccent4}/>}
        {(this.props.report.DifficultyConcentrating > 0) && <SymReportDropdownBox sym="Difficulty Concentrating" rating={this.props.report.DifficultyConcentrating} color={cAccent4}/>}
        {(this.props.report.DifficultyRemembering > 0) && <SymReportDropdownBox sym="Difficulty Remembering" rating={this.props.report.DifficultyRemembering} color={cAccent4}/>}

        {hasP && (
        <View style={{backgroundColor: '#fff', padding: 5, margin: 5}}>
          <Text style={{color: cAccent5, fontWeight: 'bold', fontSize: 20, textAlign: 'center',}}>Physical Symptoms</Text>
        </View>)}
        {(this.props.report.Headache > 0) && <SymReportDropdownBox sym="Headache" rating={this.props.report.Headache} color={cAccent5}/>}
        {(this.props.report.NauseaVomiting > 0) && <SymReportDropdownBox sym="Nausea / Vomiting" rating={this.props.report.NauseaVomiting} color={cAccent5}/>}
        {(this.props.report.Dizziness > 0) && <SymReportDropdownBox sym="Dizziness" rating={this.props.report.Dizziness} color={cAccent5}/>}
        {(this.props.report.BalanceProblems > 0) && <SymReportDropdownBox sym="Balance Problems" rating={this.props.report.BalanceProblems} color={cAccent5}/>}
        {(this.props.report.SensitivityToLight > 0) && <SymReportDropdownBox sym="Sensitivity to Light" rating={this.props.report.SensitivityToLight} color={cAccent5}/>}
        {(this.props.report.SensitivityToNoise > 0) && <SymReportDropdownBox sym="Sensitivity to Noise" rating={this.props.report.SensitivityToNoise} color={cAccent5}/>}
        {(this.props.report.Fatigue > 0) && <SymReportDropdownBox sym="Fatigue" rating={this.props.report.Fatigue} color={cAccent5}/>}
        {(this.props.report.NumbnessTingling > 0) && <SymReportDropdownBox sym="Numbness / Tingling" rating={this.props.report.NumbnessTingling} color={cAccent5}/>}
        {(this.props.report.VisionProblems > 0) && <SymReportDropdownBox sym="Vision Problems" rating={this.props.report.VisionProblems} color={cAccent5}/>}

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
