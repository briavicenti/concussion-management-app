import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
} from 'react-native';
import {
  cAccent1,
  gAccent1,
} from '../assets/styles.js';

export default class HorizontalProgressBar extends React.Component {

  render() {

    return (
          <View>
            <View style={styles.progressContainer}>
          	  <View style={styles.progressBar}>
                        
                <View style={[ styles.progressBubble, (this.props.progress > 0) && {backgroundColor: cAccent1}]}>
                  <Text style={styles.bubbleNum}>1</Text>
                  <View style={[ styles.ttTip, (this.props.progress == 1) && {opacity: 100}]}/>
                </View>

                <View style={[{flex: 1, marginHorizontal: -2,} , (this.props.progress > 1) && {backgroundColor: cAccent1}]}/>
                <View style={[ styles.progressBubble, (this.props.progress > 1) && {backgroundColor: cAccent1}]}>
                  <Text style={styles.bubbleNum}>2</Text>
                  <View style={[ styles.ttTip, (this.props.progress == 2) && {opacity: 100}]}/>
                </View>

                <View style={[{flex: 1, marginHorizontal: -2,} , (this.props.progress > 2) && {backgroundColor: cAccent1}]}/>
                <View style={[ styles.progressBubble, (this.props.progress > 2) && {backgroundColor: cAccent1}]}>
                  <Text style={styles.bubbleNum}>3</Text>
                  <View style={[ styles.ttTip, (this.props.progress == 3) && {opacity: 100}]}/>
                </View>

                <View style={[{flex: 1, marginHorizontal: -2,} , (this.props.progress > 3) && {backgroundColor: cAccent1}]}/>
                <View style={[ styles.progressBubble, (this.props.progress > 3) && {backgroundColor: cAccent1}]}>
                  <Text style={styles.bubbleNum}>4</Text>
                  <View style={[ styles.ttTip, (this.props.progress == 4) && {opacity: 100}]}/>
                </View>
    
              </View>
            </View>

            <View style={styles.ttContainer}>
              <View style={styles.ttBody}>
              {this.props.children}
              </View>
            </View>
          </View>
		);
	}
}

const styles = StyleSheet.create({
  progressContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 5,
    backgroundColor: gAccent1,
    zIndex: 1,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  progressBarStep: {
    height: 8,
    backgroundColor: gAccent1,
    flex: 1,
  },
  progressBubble: {
    borderRadius: 10,
    width: 20,
    height: 20,
    backgroundColor: gAccent1,
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop: -9,
  },
  bubbleNum: {
  	color: 'white',
  	backgroundColor: 'transparent',
  	fontWeight: 'bold',
    fontSize: 13,
    marginTop: 2,
    zIndex: 5,
  },
  ttContainer: {
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  ttBody: {
    padding: 15,
    backgroundColor: '#fff',
  },
  ttTip: {
    height: 0,
    width: 0,
    backgroundColor: 'transparent',
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
    marginTop: 3,
    opacity: 0,
  },
});