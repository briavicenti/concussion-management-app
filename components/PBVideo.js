import React from 'react';
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
			<Header3>Concussion Education Video</Header3>
			<Text>
			Please watch the NCAA concussion education video.
			</Text>
			<ColoredButton 
				onPress={() => navigate('ConcussionVid')}
				style={{flex: 1}}>
            Go to Video
            </ColoredButton>
            </View>
		);
	}
}