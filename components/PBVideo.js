import React from 'react';
import { connect } from 'react-redux';
import { 
	StyleSheet, 
	Text,
	View,
	TouchableOpacity,
	Linking
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Header2, Bold } from '../components/TextComponents';
import ColoredButton from '../components/ColoredButton';


export default class PBVideo extends React.Component {
	
	// state = {
	// 	watchedVid: this.props.watchedVid,
	// }

	// confirmWatched = () => {
	// 	this.setState({watchedVid: true});
	// }

	handleClick = () => {
		//Linking.openURL('https://www.youtube.com/watch?v=T3FLRDxbLXg&t=35s').catch(err => console.error('An error occurred', err));
	}

	render() {
		const { navigate } = this.props.navigation;

		var button = (<ColoredButton onPress={() => {this.handleClick(); this.props.markComplete();}}>
            		  Go to Video
                      </ColoredButton>);
		if (this.props.watchedVid) {
			button = (<ColoredButton onPress={() => {this.props.markVideoDone()}}>Confirm Watched</ColoredButton>)
		}


		return (
			<View>
			<Header2>Concussion Education Video</Header2>
			<Text>
			Please watch the NCAA concussion education video. 
			When you are done, return to this application and confirm that the video has been watched to move on.
			</Text>
			<Bold>{'\n'}(The video will open in YouTube)</Bold>

			{button}

            </View>
		);
	}
}

PBVideo = connect(
                        null, 
                        dispatch => ({markComplete: () => {dispatch({section: 'watchedVid', type: 'MARK_COMPLETE', state: true})}})
                        )(PBVideo);

PBVideo = connect(
                        null, 
                        dispatch => ({markVideoDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 2})}})
                        )(PBVideo);

PBVideo = connect(store => ({watchedVid: store.watchedVid}))(PBVideo);
