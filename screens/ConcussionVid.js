import React from 'react';
import { StyleSheet, 
		 View, 
		 Text, 
		 Dimensions, 
		 TouchableOpacity,
		 WebView } from 'react-native';
import { Video, Constants } from 'expo';
import YouTube from 'react-native-youtube';
import Icon from 'react-native-vector-icons/FontAwesome';
import { gAccent1 } from '../assets/styles';

export default class ConcussionVid extends React.Component {
	

	state = {
    	paused: true,
  	};

  	_handleButtonPress = () => {
    	this.setState(state => ({
      	paused: !state.paused
    	}));
  	};

	render () {
		const paused = this.state.paused;
		return(
		    <View style={styles.container}>
		        

		    	<WebView
        			style={{flex:1}}
        			javaScriptEnabled={true}
        			source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
				/>

				{/*}
		        <Video
		          source={require('../assets/concussion.mp4')}
		          isAsset={true}
		          rate={1.0}
		          volume={1.0}
		          muted={false}
		          resizeMode='cover'
		          paused={paused}
		          style={{ width: Dimensions.get('window').width, height: 170, margin: 10, padding: 10}}
		        />
		        <TouchableOpacity 
		            onPress={this._handleButtonPress}>
		            <Icon name={paused? "play-circle" :"pause-circle"} size={28} color={gAccent1}/>
		        </TouchableOpacity>
		    */}
        	

			{/*}
			<Video
				source={require('../assets/concussion.mp4')}
				style={{width: 300, height: 300}}
				isAsset={true}
				rate={1.0}
				volume={1.0}
				resizeMode='cover'/>
			*/}
			{/*<YouTube
				ref="youtubePlayer"
				videoId="T3FLRDxbLXg" // The YouTube video ID
				play={true}           // control playback of video with true/false
				hidden={false}        // control visiblity of the entire view
				playsInline={true}    // control whether the video should play inline
				loop={false}          // control whether the video should loop when ended

				onReady={(e)=>{this.setState({isReady: true})}}
				onChangeState={(e)=>{this.setState({status: e.state})}}
				onChangeQuality={(e)=>{this.setState({quality: e.quality})}}
				onError={(e)=>{this.setState({error: e.error})}}
				onProgress={(e)=>{this.setState({currentTime: e.currentTime, duration: e.duration})}}

				style={{alignSelf: 'stretch', height: 300, backgroundColor: 'white', marginVertical: 10}}
				/>
			*/}
			</View>
		);
	}
}

var styles = StyleSheet.create({
  container: {
  	flex: 1,
  	alignItems: 'center',
  	justifyContent: 'center',
  	padding: 10,  },
  fab: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 56/2,
    elevation: 6,
     shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  fabContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
});