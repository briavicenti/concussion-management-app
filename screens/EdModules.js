import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, 
		 View, 
		 Text, 
		 Dimensions, 
		 TouchableOpacity,
		 WebView } from 'react-native';
import ConcussionOverview from './ConcussionOverview';
import SignsAndSymptoms from './SignsAndSymptoms';
import ConcussionRecovery from './ConcussionRecovery';
import ReturnToPlay from './ReturnToPlay';

export default class EdModules extends React.Component {

	static navigationOptions = {
    	title: 'Education Modules',
    };

	
	render () {

		var content = (<ConcussionOverview navigation={this.props.navigation}/>);

		switch(this.props.edStage) {
			case 2: 
				content = (<SignsAndSymptoms navigation={this.props.navigation}/>);
				break;
			case 3: 
				content = (<ConcussionRecovery navigation={this.props.navigation}/>);
				break;
			case 4:
				content = (<ReturnToPlay navigation={this.props.navigation}/>);
				break;
		}

		return(
			<View>
		    {content}
		    </View>
		);
	}
}

EdModules = connect(store => ({edStage: store.edStage}))(EdModules); // Get education module stage
EdModules = connect(
                        null, 
                        dispatch => ({markEdDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 3})}})
                        )(EdModules); // Mark education done