import React from 'react';
import { connect } from 'react-redux';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header2 } from '../components/TextComponents';
import ColoredButton from '../components/ColoredButton';
import ProgressStage from '../components/ProgressStage';


export default class PBWaiver extends React.Component {
	state = {
		stage: 0,
	}

	render() {
		const { navigate } = this.props.navigation;

		var buttonText = (this.state.stage > 0) ? "Resume Training" : "Begin Training";

		var navTo = "ConcussionOverview";
		
		switch(this.state.stage) {
			case 2:
				navTo = "SignsAndSymptoms";
				break;
			case 3: 
				navTo = "ConcussionRecovery";
				break;
			case 4:
				navTo = "ReturnToPlay";
				break;
		}
		// switch statement for navTo 

		return (
			<View>

			<Header2>Education Module</Header2>

			<Text style={{marginBottom: 15,}}>Complete your concussion education training by reading through the four modules below.</Text>

			<ProgressStage complete={(this.state.stage > 1) ? true : false} current={(this.state.stage == 0 || this.state.stage == 1) ? true : false}>
			1. Concussion Overview
			</ProgressStage>
			<ProgressStage complete={(this.state.stage > 2) ? true : false} current={(this.state.stage == 2) ? true : false}>
			2. Signs & Symptoms
			</ProgressStage>
			<ProgressStage complete={(this.state.stage > 3) ? true : false} current={(this.state.stage == 3) ? true : false}>
			3. Concussion Recovery
			</ProgressStage>
			<ProgressStage complete={(this.state.stage > 4) ? true : false} current={(this.state.stage == 4) ? true : false}>
			4. Return-to-Play
			</ProgressStage>

			<ColoredButton onPress={() => navigate(navTo)}>{buttonText}</ColoredButton>

            </View>
		);
	}
}

// PBWaiver = connect(store => ({needsCodeOfConduct: !store.codeOfConduct}))(PBWaiver);
// PBWaiver = connect(store => ({needsConcussionPolicy: !store.concussionPolicy}))(PBWaiver);

const styles = StyleSheet.create({

});