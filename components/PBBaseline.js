import React from 'react';
import { connect } from 'react-redux';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header2, Bold } from '../components/TextComponents';
import ColoredButton from '../components/ColoredButton';


export default class PBWaiver extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
			<Header2>Symptom Baseline</Header2>
			<Text>
			You're almost done! To familiarize yourself with the symptom rating system, you will be
			taking a baseline symptom test. This symptom check is identical to the one you would use to report
			concussion symptoms during your season {'\n'}
			</Text>

			<Bold>Please respond honestly about any symptoms you have experienced in the last 24 hours</Bold>
            <ColoredButton onPress={() => navigate('SymptomTest')}>
            Begin Test
            </ColoredButton>
            </View>
		);
	}
}

