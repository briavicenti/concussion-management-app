import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
} from 'react-native';

export default class VerticalProgressBar extends React.Component {
	render() {
		return (
          <View style={styles.progressContainer}>

          	<View style={styles.progressBar}>
                        
	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>1</Text>
	              </View>
	              <Text style={styles.progressText}>Fill out Colgate waiver.</Text>
	            </View>   

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>2</Text>
	              </View>
	              <Text style={styles.progressText}>Complete concussion education modules.</Text>
	            </View>

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>3</Text>
	              </View>
	              <Text style={styles.progressText}>Watch concussion video.</Text>
	            </View>

	            <View style={styles.progressSteps}>
	              <View style={styles.progressBubble}>
	                <Text style={styles.bubbleNum}>4</Text>
	              </View>
	              <Text style={styles.progressText}>Post-training quiz.</Text>
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
    height: 250,
  },
  progressBar: {
    width: 8,
    backgroundColor: '#328F9C',
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
  	fontSize: 15,
  	color: '#3A3A3A',
  },
  progressBubble: {
    borderRadius: 12.5,
    width: 25,
    height: 25,
    backgroundColor: '#328F9C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: -8,
  },
  bubbleNum: {
  	color: 'white',
  	backgroundColor: 'transparent',
  	fontWeight: 'bold',
  }
});