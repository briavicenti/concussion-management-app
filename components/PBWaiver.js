import React from 'react';
import { connect } from 'react-redux';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header3, Header2 } from '../components/TextComponents';
import ColoredButton from '../components/ColoredButton';


export default class PBWaiver extends React.Component {

	checkFinished = () => {
		if (this.props.codeOfConduct || this.props.ConcussionPolicy) {
			this.props.markWaiversDone();
		}
	}
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
			<Header2>Required Forms</Header2>
			<Text>
			Please fill out the following forms
			before you begin your season.
			</Text>
			{!this.props.codeOfConduct && <ColoredButton 
				onPress={() => { navigate('CodeOfConduct'); this.checkFinished(); }}>
            Code of Conduct
            </ColoredButton>}
            {!this.props.concussionPolicy && 
            <ColoredButton onPress={() => { navigate('ConcussionPolicy'); this.checkFinished(); }}>
            Concussion Policy
            </ColoredButton>}
            </View>
		);
	}
}

PBWaiver = connect(store => ({codeOfConduct: store.codeOfConduct}))(PBWaiver);
PBWaiver = connect(store => ({concussionPolicy: store.concussionPolicy}))(PBWaiver);

PBWaiver = connect(
                        null, 
                        dispatch => ({markWaiversDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 4})}})
                        )(PBWaiver); // Mark waivers done