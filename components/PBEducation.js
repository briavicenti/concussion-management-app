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
import ProgressStage from '../components/ProgressStage';


export default class PBWaiver extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View>
			<Header3>Education Module</Header3>

			<ProgressStage complete={true} current={false}>1. What is a concussion?</ProgressStage>
			<ProgressStage complete={false} current={true}>2. Signs & Symptoms</ProgressStage>
			<ProgressStage complete={false} current={false}>3. Concussion recovery</ProgressStage>
			<ProgressStage complete={false} current={false}>4. Return to play</ProgressStage>

			{/*{this.props.needsCodeOfConduct && <ColoredButton 
				onPress={() => navigate('CodeOfConduct')}>
            Code of Conduct
            </ColoredButton>}
            {this.props.needsConcussionPolicy && 
            <ColoredButton onPress={() => navigate('ConcussionPolicy')}>
            Concussion Policy
            </ColoredButton>*/}
            </View>
		);
	}
}

// PBWaiver = connect(store => ({needsCodeOfConduct: !store.codeOfConduct}))(PBWaiver);
// PBWaiver = connect(store => ({needsConcussionPolicy: !store.concussionPolicy}))(PBWaiver);

const styles = StyleSheet.create({

});