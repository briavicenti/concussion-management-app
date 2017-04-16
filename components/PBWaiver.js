import React from 'react';
import { connect } from 'react-redux';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header3 } from '../components/TextComponents';
import ColoredButton from '../components/ColoredButton';


export default class PBWaiver extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
			<Header3>Required Forms</Header3>
			<Text>
			Please fill out the following forms
			before you begin your season.
			</Text>
			{this.props.needsCodeOfConduct && <ColoredButton 
				onPress={() => navigate('CodeOfConduct')}>
            Code of Conduct
            </ColoredButton>}
            {this.props.needsConcussionPolicy && 
            <ColoredButton onPress={() => navigate('ConcussionPolicy')}>
            Concussion Policy
            </ColoredButton>}
            </View>
		);
	}
}

PBWaiver = connect(store => ({needsCodeOfConduct: !store.codeOfConduct}))(PBWaiver);
PBWaiver = connect(store => ({needsConcussionPolicy: !store.concussionPolicy}))(PBWaiver);