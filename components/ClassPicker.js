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

export default class ClassPicker extends React.Component {

	render() {

		return (
			<View style={{backgroundColor: '#fff', borderWidth: 1, borderColor: gAccent1, margin: 5}}>
        <Picker
          selectedValue={this.props.classYear}
          onValueChange={(classYear) => this.props.updateClassYear(classYear)}
          prompt="Select your class year.">
          <Picker.Item label="2017" value="2017" />
          <Picker.Item label="2018" value="2018" />
          <Picker.Item label="2019" value="2019" />
          <Picker.Item label="2020" value="2020" />
        </Picker>
      </View>
		);
	}
}

