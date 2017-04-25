import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	TextInput,
} from 'react-native';
import {
  cAccent1,
  gAccent1,
} from '../assets/styles.js';

export default class Textbox extends React.Component {

	constructor(props) {
    super(props);
    this.state = {text: this.props.placeholder};
  }

	render() {

		return (
			<TextInput
        autocomplete={this.props.autocomplete}
        style={[styles.textbox, this.props.style]}
        onChangeText={(text) => this.props.handler(text)}
        value={this.props.value}
        clearTextOnFocus={true}
      />
		);
	}
}

const styles = StyleSheet.create({
  textbox: {
    height: 30,
    borderColor: gAccent1,
    borderWidth: 1,
    backgroundColor: '#fff',
    color: gAccent1,
    fontSize: 16,
    padding: 5,
    margin: 5,
  }
});