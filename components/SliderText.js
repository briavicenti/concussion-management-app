import React from 'react';
import { 
	StyleSheet, 
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {
	gAccent1,
} from '../assets/styles.js'
import Slider from 'react-native-slider';

export default class SliderText extends React.Component {

	// state = {
	// 	rating: {this.props.rating},
	// }

	render() {
		var symColor = this.props.color;
		
		return (
			<View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
			<Text style={[styles.text, (this.props.rating == 0) && {fontWeight: 'bold', color: symColor}]}>0</Text>
			<Text style={[styles.text, (this.props.rating == 1) && {fontWeight: 'bold', color: symColor}]}>1</Text>
			<Text style={[styles.text, (this.props.rating == 2) && {fontWeight: 'bold', color: symColor}]}>2</Text>
			<Text style={[styles.text, (this.props.rating == 3) && {fontWeight: 'bold', color: symColor}]}>3</Text>
			<Text style={[styles.text, (this.props.rating == 4) && {fontWeight: 'bold', color: symColor}]}>4</Text>
			<Text style={[styles.text, (this.props.rating == 5) && {fontWeight: 'bold', color: symColor}]}>5</Text>
			<Text style={[styles.text, (this.props.rating == 6) && {fontWeight: 'bold', color: symColor}]}>6</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
		color: gAccent1,
		//flex: 1, 
	}

	
});