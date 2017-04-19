import React from 'react';
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
	
	state = {
		watchedVid: false,
	}

	confirmWatched = () => {
		this.setState({watchedVid: true});
	}

	handleClick = () => {
		Linking.openURL('https://www.youtube.com/watch?v=T3FLRDxbLXg&t=35s').catch(err => console.error('An error occurred', err));
		confirmWatched();
	}

	render() {
		const { navigate } = this.props.navigation;

		var button = (<ColoredButton onPress={this.handleClick}>
            		  Go to Video
                      </ColoredButton>);
		if (this.state.watchedVid) {
			button = (<ColoredButton>Confirm Watched</ColoredButton>)
		}


		return (
			<View>
			<Header2>Concussion Education Video</Header2>
			<Text>
			Please watch the NCAA concussion education video. 
			When you are done, return to this application and confirm that the video is finished to move on.
			</Text>
			<Bold>{'\n'}(The video will open in YouTube)</Bold>

			{/* OPEN VIDEO IN YOUTUBE APP!!! */}

			{/*}
			<ColoredButton 
				onPress={() => navigate('ConcussionVid')}
				style={{flex: 1}}>
			*/}
			<ColoredButton onPress={() => Linking.openURL('https://www.youtube.com/watch?v=T3FLRDxbLXg&t=35s').catch(err => console.error('An error occurred', err))}>
            Go to Video
            </ColoredButton>
            </View>
		);
	}
}