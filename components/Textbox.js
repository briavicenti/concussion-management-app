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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

{/* Props you need to pass in: placeholder text */}

export default class Textbox extends React.Component {

	constructor(props) {
    super(props);
    this.state = {text: this.props.placeholder};
  }

	render() {

		return (
			<TextInput
        style={[styles.textbox, this.props.style]}
        onChangeText={(text => this.setState({text}))}
        value={this.state.text}
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
    fontSize: 13,
    padding: 5,
    margin: 5,
  }
});