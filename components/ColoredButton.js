import React from 'react';
import { 
	StyleSheet, 
	Text,
	TouchableOpacity,
} from 'react-native';
import {
	bg,
	accent1,
	accent2,
	accent3,
} from '../assets/styles.js'

export default class ColoredButton extends React.Component {
	render() {
		return (
			<TouchableOpacity 
            	style={[styles.button, this.props.style]}
            	onPress={this.props.onPress}>
            	<Text style={styles.buttonText}>{this.props.children}</Text>
            </TouchableOpacity>
			
		);
	}
}

const styles = StyleSheet.create({
	button: {
	    backgroundColor: '#328F9C',
	    padding: 10,
	    width: 280,
	    marginTop: 20,
	    borderRadius: 5,
	    alignItems: 'center',
	    alignSelf: 'center',
	},
	buttonText: {
    	color: '#fff',
    	fontWeight: 'bold',
    	fontSize: 20,
    },
});