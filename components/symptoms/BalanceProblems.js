import React from 'react';
//import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  cAccent1,
  gAccent1,
} from '../../assets/styles.js';
import {
  Header3,
  Bold,
  BlockText,
} from '../../components/TextComponents';
import ColoredButton from '../../components/ColoredButton';
import SliderText from '../../components/SliderText';
import SymDescription from '../../components/SymDescription';
import Slider from 'react-native-slider';

export default class BalanceProblems extends React.Component {

  state = {
    rating: 0,
  }

  render() {

    var symColor = cAccent1;

    return (
      <View>
        
        <View style={{ justifyContent: 'center',
                       alignItems: 'center',
                       paddingHorizontal: 10,
                       height: 110,
                       backgroundColor: symColor}}>
          <Text style={styles.symptomTitle}>Balance Problems</Text>
        </View>

        <SymDescription
          rating={this.state.rating}
          symColor = {symColor}
          sym ="balance problems"
          d1="You are almost entirely confident in your balance abilities and do not fall."
          d2="You are mostly confident in your balance abilities and may face more difficulty than normal while completing physical activities."
          d3="You are somewhat unconfident in your balance abilities, generally feel unsteady while walking or moving, and may have fallen once or twice."
          d4="You are not very confident in your balance abilities and feel unsteady and occasionally fall when you walk or move. "
          d5="You are not confident in your balance abilities. You have trouble walking or moving without falling and so you try to do so infrequently or get assistance to move around."
          d6="You are entirely stationary because you feel unsafe walking or moving due to your balancing problems."/>

        <View style={{marginHorizontal: 25}}>
          <SliderText rating={this.state.rating} color={symColor}/>

          <Slider
                value={this.state.rating}
                onValueChange={(rating) => this.setState({rating})} 
                minimumValue={0}
                maximumValue={6}
                step={1}
                thumbStyle={{width: 20, backgroundColor: symColor, top: 22}}
                trackStyle={styles.trackStyle}
                minimumTrackTintColor={symColor}
                />
        </View>

        <ColoredButton style={{backgroundColor: symColor, marginBottom: 20, marginTop: 5,}}>
        <Text style={{fontSize: 20}}>Submit</Text>
        </ColoredButton>

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
  symptomTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  trackStyle: {
    backgroundColor: gAccent1,
  }
});