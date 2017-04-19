import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
} from 'react-native';
import {
  gAccent1,
  cAccent1,
  cAccent2,
} from '../assets/styles';

export default class VerticalProgressBar extends React.Component {
	render() {
		return (
          <View style={styles.progressContainer}>

          	<View style={styles.progressBar}>
                        
	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>1</Text>
	              </View>
	              <Text style={styles.progressText}>NCAA concussion video.</Text>
	            </View>   

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>2</Text>
	              </View>
	              <Text style={styles.progressText}>Concussion education modules.</Text>
	            </View>

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>3</Text>
	              </View>
	              <Text style={styles.progressText}>Colgate athletics waivers.</Text>
	            </View>

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>4</Text>
	              </View>
	              <Text style={styles.progressText}>Symptom baseline test.</Text>
	            </View>

            </View>

          </View>
		);
	}
}

const styles = StyleSheet.create({
  progressContainer: {
    margin: 20,
    justifyContent: 'space-between',
    height: 300,
  },
  progressBar: {
    width: 9,
    backgroundColor: cAccent1,
    zIndex: 1,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  progressSteps: {
    zIndex: 2,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: 200,
  },
  progressText: {
  	fontSize: 18,
  	color: cAccent2,
    fontWeight: 'bold',
  },
  progressBubble: {
    borderRadius: 15,
    width: 30,
    height: 30,
    backgroundColor: cAccent1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: -10,
  },
  bubbleNum: {
  	color: 'white',
  	backgroundColor: 'transparent',
  	fontWeight: 'bold',
  }
});