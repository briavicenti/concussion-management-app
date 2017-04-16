import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import {
	cAccent1,
	gAccent1,
} from '../assets/styles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class ProgressBox extends React.Component {
	state = {
		complete: this.props.complete,
	}

	render () {
		var symbol = (<FontAwesome name='times' style={{color: cAccent1, fontSize: 15}}/>);

		if (this.props.complete) {
			symbol = (<FontAwesome name='check' style={{color: gAccent1, fontSize: 15}}/>);
		}

		return (
			<View style={[this.props.style, styles.box, (this.state.complete && {borderColor: gAccent1})]}>
			{symbol}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	box: {
		borderWidth: 2,
		borderColor: cAccent1,
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
	}
});