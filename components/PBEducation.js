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


export default class PBEducation extends React.Component {
	// state = {
	// 	stage: 0,
	// }

	render() {
		const { navigate } = this.props.navigation;

		var navTo = "ConcussionOverview";
		var currTracker = [true, false, false, false]
		var compTracker = [false,false, false, false]
		
		switch(this.props.edStage) {
			
			case 2:
				navTo = "SignsAndSymptoms";
				currTracker = [false, true, false, false]
				compTracker = [true, false, false, false]
				break;
			case 3: 
				navTo = "ConcussionRecovery";
				currTracker = [false, false, true, false]
				compTracker = [true, true, false, false]
				break;
			case 4:
				navTo = "ReturnToPlay";
				currTracker = [false, false, false, true]
				compTracker = [true, true, true, false]
				break;
		}

		var stage = this.props.edStage;

		var button = ( this.props.edStage > 0) ? (<ColoredButton onPress={() => navigate(navTo)}>Resume Training</ColoredButton>) : 
		                                         (<ColoredButton onPress={() => { navigate(navTo); this.props.beginEd(); }}>Begin Training</ColoredButton>);

		return (
			<View>

			<Header2>Education Module</Header2>

			<Text style={{marginBottom: 15,}}>Complete your concussion education training by reading through the four modules below.</Text>

			<ProgressStage complete={compTracker[0]} current={currTracker[0]}>
			1. Concussion Overview
			</ProgressStage>
			<ProgressStage complete={compTracker[1]} current={currTracker[1]}>
			2. Signs & Symptoms
			</ProgressStage>
			<ProgressStage complete={compTracker[2]} current={currTracker[2]}>
			3. Concussion Recovery
			</ProgressStage>
			<ProgressStage complete={compTracker[3]} current={currTracker[3]}>
			4. Return-to-Play
			</ProgressStage>

			{button}

            </View>
		);
	}
}

PBEducation = connect(
                        null, 
                        dispatch => ({beginEd: () => {dispatch({section: 'edStage', type: 'CHANGE_STAGE', state: 1})}})
                        )(PBEducation);

PBEducation = connect(store => ({edStage: store.edStage}))(PBEducation);
