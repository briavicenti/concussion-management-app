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

export default class FeelingSluggish extends React.Component {

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
          <Text style={styles.symptomTitle}>Feeling Sluggish / "Slowed Down"</Text>
        </View>

        <SymDescription
          rating={this.state.rating}
          symColor = {symColor}
          sym ="feelings of being sluggish or slowed down"
          d1="You may find yourself feeling sluggish or slowed down in certain situations, but you can still complete your daily activities."
          d2="You find yourself regularly feeling sluggish or taking longer to complete certain tasks and may move through the day at a slower pace."
          d3="Many of your daily activities take longer or are otherwise impacted by your sluggishness and sensation of being slowed down."
          d4="You regularly feel sluggish down throughout the day and you find yourself unable to complete many activities due to your sensation of being slowed down."
          d5="You struggle to complete most activities due to your sluggishness, and you may find yourself moving, thinking, and actly slowly throughout the day."
          d6="You are totally unable to complete even the most basic activities because of your sluggishness and you may find yourself moving, thinking, and actly slowly throughout the day."/>

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


FeelingSluggish = connect(store => ({symptomRatings: store.symptomRatings}),
                   dispatch => ({updateRating: (symptom, ratings) => {dispatch({type: 'ADD_SYMPTOM_RATING', symptom: symptom, ratings: ratings})}
                               })
                   )(FeelingSluggish);
