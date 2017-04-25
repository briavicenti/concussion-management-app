import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	Picker,
} from 'react-native';
import {
  cAccent1,
  gAccent1,
} from '../assets/styles.js';
import {
  DropDown,
  Select,
  Option,
  OptionList
} from 'react-native-selectme';

export default class SportPicker extends React.Component {

	render() {

		return (
			<View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: gAccent1, margin: 5}}>
        <Picker
          selectedValue={this.props.sport}
          onValueChange={(sport) => this.props.updateSport(sport)}
          prompt="Select your sport.">
          <Picker.Item label="Badminton" value="badminton" />
          <Picker.Item label="Baseball" value="baseball" />
          <Picker.Item label="Basketball" value="bball" />
          <Picker.Item label="Bowling" value="bowling" />
          <Picker.Item label="Curling" value="curling" />
          <Picker.Item label="Cycling" value="cycling" />
          <Picker.Item label="Equestrian" value="equestrian" />
          <Picker.Item label="Fencing" value="fencing" />
          <Picker.Item label="Field Hockey" value="fh" />
          <Picker.Item label="Figure Skating" value="fs" />
          <Picker.Item label="Golf" value="golf" />
          <Picker.Item label="Ice Hockey" value="ih" />
          <Picker.Item label="Juggling" value="juggling" />
          <Picker.Item label="Lacrosse" value="lax" />
          <Picker.Item label="Martial Arts - Aikido" value="aikido" />
          <Picker.Item label="Martial Arts - American Karate" value="karate" />
          <Picker.Item label="Ping Pong" value="pingpong" />
          <Picker.Item label="Rock Climbing" value="rc" />
          <Picker.Item label="Rugby" value="rugby" />
          <Picker.Item label="Running" value="running" />
          <Picker.Item label="Sailing" value="sailing" />
          <Picker.Item label="Ski Racing" value="ski" />
          <Picker.Item label="Soccer" value="soccer" />
          <Picker.Item label="Squash" value="squash" />
          <Picker.Item label="Swimming" value="swimming" />
          <Picker.Item label="Tennis" value="tennis" />
          <Picker.Item label="Triathlon" value="triathlon" />
          <Picker.Item label="Ultimate Frisbee" value="uf" />
          <Picker.Item label="Volleyball" value="vball" />
          <Picker.Item label="Water Polo" value="wp" />
        </Picker>
      </View>
		);
	}
}

