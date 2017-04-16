import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableWithoutFeedback,
} from 'react-native';
import {
  cAccent1,
  gAccent1,
} from '../assets/styles.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Checkbox extends React.Component {

	state = {
    	checked: false,
    }
  
  toggleCheck(toggle) {
    this.setState({checked: toggle});
  }

	render() {

		return (
			<View style={styles.container}>
			<TouchableWithoutFeedback
				onPress={() => this.toggleCheck(!this.state.checked)}
			>
				<View style={styles.checkbox}>
				{this.state.checked && <FontAwesome name='check' style={{color: gAccent1}}/>}
				</View>
			</TouchableWithoutFeedback>
			<Text style={{flex: 1, alignSelf: 'flex-start'}}>{this.props.children}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
  	flexDirection: 'row',
  	alignItems: 'center',
  	marginBottom: 10,
  	//marginHorizontal: 10,
  	//flexWrap: 'wrap',
  },
  checkbox: {
  	height: 25,
  	width: 25,
  	backgroundColor: '#fff',
  	borderColor: gAccent1,
  	borderWidth: 1,
  	marginRight: 5,
  	alignItems: 'center',
  	justifyContent: 'center',
  },
});