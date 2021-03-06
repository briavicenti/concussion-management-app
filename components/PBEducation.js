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
	render() {

		const { navigate } = this.props.navigation;

		var currTracker = [true, false, false, false]
		var compTracker = [false,false, false, false]
		
		switch(this.props.edStage) {
			case 2:
				currTracker = [false, true, false, false]
				compTracker = [true, false, false, false]
				break;
			case 3: 
				currTracker = [false, false, true, false]
				compTracker = [true, true, false, false]
				break;
			case 4:
				currTracker = [false, false, false, true]
				compTracker = [true, true, true, false]
				break;
		}

		var button = ( this.props.edStage > 0) ? (<ColoredButton onPress={() => navigate('EdModules')}>Resume Training</ColoredButton>) : 
		                                         (<ColoredButton onPress={() => { navigate('EdModules'); this.props.beginEd(); }}>Begin Training</ColoredButton>);

		var stage1 = (<ProgressStage complete={compTracker[0]} current={currTracker[0]}>
					  1. Concussion Overview
					  </ProgressStage>);

		var stage2 = (<ProgressStage complete={compTracker[1]} current={currTracker[1]}>
			          2. Signs & Symptoms
			          </ProgressStage>);

		var stage3 = (<ProgressStage complete={compTracker[2]} current={currTracker[2]}>
			          3. Concussion Recovery
			          </ProgressStage>);

		var stage4 = (<ProgressStage complete={compTracker[3]} current={currTracker[3]}>
			          4. Return-to-Play
			          </ProgressStage>);

		return (

			<View>
			<Header2>Education Module</Header2>
			<Text style={{marginBottom: 15,}}>Complete your concussion education training by reading through the four modules below.</Text>
			
			{/*}
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
		*/}

			{stage1}
			{stage2}
			{stage3}
			{stage4}

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
