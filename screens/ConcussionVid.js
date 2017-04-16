import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Video from 'react-native-video';

export default class ConcussionVid extends React.Component {
	render () {
		return(
			
			<View>
			{/*
			<Video source={require("../assets/concussion.mp4")}   // Can be a URL or a local file.
		       ref={(ref) => {
		         this.player = ref
		       }}                                      // Store reference
		       //rate={1.0}                              // 0 is paused, 1 is normal.
		       //volume={1.0}                            // 0 is muted, 1 is normal.
		       //muted={false}                           // Mutes the audio entirely.
		       //paused={false}                          // Pauses playback entirely.
		       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
		       //repeat={true}                           // Repeat forever.
		       playInBackground={false}                // Audio continues to play when app entering background.
		       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
		       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
		       onLoadStart={this.loadStart}            // Callback when video starts to load
		       onLoad={this.setDuration}               // Callback when video loads
		       onProgress={this.setTime}               // Callback every ~250ms with currentTime
		       onEnd={this.onEnd}                      // Callback when playback finishes
		       onError={this.videoError}               // Callback when video cannot be loaded
		       onBuffer={this.onBuffer}                // Callback when remote video is buffering
		       onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
		       style={styles.backgroundVideo} 
		    />
			*/}

			
			<Text>This will hold a video.</Text>
			</View>

			// Later to trigger fullscreen
			// this.player.presentFullscreenPlayer();

			// To set video position in seconds (seek)
			//this.player.seek(0);

		);
	}
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});