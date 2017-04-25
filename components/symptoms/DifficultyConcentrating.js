import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  cAccent4,
  gAccent1,
} from '../../assets/styles.js';
import ColoredButton from '../../components/ColoredButton';
import SliderText from '../../components/SliderText';
import SymDescription from '../../components/SymDescription';
import Slider from 'react-native-slider';

export default class DifficultyConcentrating extends React.Component {

  state = {
    rating: 0,
  }

  render() {

    var prevRatings = [];
    var symName = this.props.symName;

    if (this.props.symptomRatings) {
      if (this.props.symptomRatings[symName]) {
        prevRatings = this.props.symptomRatings[symName];
      }
    }

    var symColor = cAccent4;

    return (
      <View>
        
        <View style={{ justifyContent: 'center',
                       alignItems: 'center',
                       paddingHorizontal: 10,
                       height: 110,
                       backgroundColor: symColor}}>
          <Text style={styles.symptomTitle}>Difficulty Concentrating</Text>
        </View>

        <SymDescription
          rating={this.state.rating}
          symColor = {symColor}
          sym ="difficulty concentrating"
          d1="You may find yourself struggling to concentrate in certain situations, but you can still complete your daily activities."
          d2="You find yourself regularly struggling to concentrate in certain situations, and may experience slight difficulty in concentrating throughout the day."
          d3="Many of your daily activities are impacted by your difficulty concentrating and you may struggle to concentrate even more in certain situations."
          d4="You regularly struggle to concentrate throughout the day and you find yourself unable to complete many activities due to your inability to concentrate."
          d5="You struggle to complete most activities due to your inability to concentrate."
          d6="You are totally unable to start and complete even the most basic activities because of your inability to concentrate."/>

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

        <ColoredButton style={{backgroundColor: symColor, marginBottom: 20, marginTop: 5,}} onPress={() => { this.props.onSubmit(); this.props.updateRating(symName, prevRatings.concat(this.state.rating)); }}>
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


DifficultyConcentrating = connect(store => ({symptomRatings: store.symptomRatings}),
                   dispatch => ({updateRating: (symptom, ratings) => {dispatch({type: 'ADD_SYMPTOM_RATING', symptom: symptom, ratings: ratings})}
                               })
                   )(DifficultyConcentrating);
