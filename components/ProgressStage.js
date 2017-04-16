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
import ProgressBox from '../components/ProgressBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


export default class ProgressStage extends React.Component {
	state = {
		current: this.props.current,
		complete: this.props.complete,
	}

	render () {

		// An item can be complete, incomplete but not current, and incomplete and current.
		return (
			<View style={styles.progressContainer}>
				<ProgressBox complete={this.state.complete} style={{marginRight: 5}}/>
				<Text style={
					[styles.label, 
					this.state.current && styles.labelCurrent, 
					this.state.complete && styles.labelComplete]
				}>
					{this.props.children}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	progressContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		margin: 5,
	},
	label: {
		fontSize: 18 ,
		color: cAccent1,
		flex: 1,
	},
	labelCurrent: {
		fontWeight: 'bold',
	},
	labelComplete: {
		color: gAccent1,
	},
});