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

export default class InjurySourcePicker extends React.Component {

	render() {

		return (
			<View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: gAccent1, margin: 5}}>
        <Picker
          selectedValue={this.props.injurySource}
          onValueChange={(injurySource) => this.props.updateInjurySource(injurySource)}
          prompt="Select your sport.">
          <Picker.Item label="Contact with a player" value="Contact with a player" />
          <Picker.Item label="Contact with equipment" value="Contact with equipment" />
          <Picker.Item label="Contact with ground" value="Contact with ground" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
		);
	}
}

