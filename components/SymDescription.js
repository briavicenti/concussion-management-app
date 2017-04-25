import React from 'react';
import { 
	StyleSheet, 
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Header3 } from './TextComponents';
import {
	gAccent1,
} from '../assets/styles.js'

export default class SymDescription extends React.Component {

	render() {

		var symColor = this.props.symColor;

		var currTitle = ("Invalid position");
		var currSym = ("Invalid position");

		switch(this.props.rating) {
			case 0:
				currTitle = "0. No "+this.props.sym.toLowerCase()+".";
				currSym="";
				break;
			case 1:
				currTitle="1. Very mild to mild.";
				currSym=this.props.d1;
				break;
			case 2: 
				currTitle="2. Mild to moderate.";
				currSym=this.props.d2;
				break;
			case 3: 
				currTitle="3. Moderate.";
				currSym=this.props.d3;
				break;
			case 4: 
				currTitle="4. Moderate to severe.";
				currSym=this.props.d4;
				break;
			case 5: 
				currTitle="5. Severe";
				currSym=this.props.d5;
				break;
			case 6: 
				currTitle="6. Very severe.";
				currSym=this.props.d6;
				break;
		}
		
		return (
			<View style={styles.descriptionBox}>
			<Header3 style={{color: symColor, fontSize: 24}}>{currTitle}</Header3>
			<Text style={{fontSize: 20,}}>{currSym}</Text>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	descriptionBox: {
	    marginHorizontal: 25,
	    marginTop: 20,
	    marginBottom: 15,
	    //flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    height: 290,
	    padding: 20,
	    backgroundColor: '#fff',
    },
	
});