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

export default class DifficultyRemembering extends React.Component {

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
          <Text style={styles.symptomTitle}>Difficulty Remembering</Text>
        </View>

        <SymDescription
          rating={this.state.rating}
          symColor = {symColor}
          sym ="difficulty remembering"
          d1="You may find yourself struggling to remember information in certain situations, but you can still complete your daily activities."
          d2="You find yourself struggling to quickly recall information and may experience slight lapses in memory or an inability to remember new information throughout the day."
          d3="Many of your daily activities are impacted by your persistent lapses in memory and recall and you may struggle to remember certain types of information or events even more."
          d4="You regularly struggle to recall or remember new and old information or events throughout the day."
          d5="You struggle to remember and recall the majority of new and old information presented to you and/or certain events that have occurred in your life."
          d6="You are totally unable to remember or recall any new and old information or events that have occurred in your life."/>

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


DifficultyRemembering = connect(store => ({symptomRatings: store.symptomRatings}),
                   dispatch => ({updateRating: (symptom, ratings) => {dispatch({type: 'ADD_SYMPTOM_RATING', symptom: symptom, ratings: ratings})}
                               })
                   )(DifficultyRemembering);
