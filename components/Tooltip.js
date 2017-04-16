import React from 'react';
import { 
	StyleSheet, 
	Text,
	View,
} from 'react-native';

export default class HorizontalProgressBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { progress: 1 };
  }

  render() {

    return (
        <View style={styles.ttContainer}>
          <View style={styles.ttTip}/>
          <View style={styles.ttBody}>
          {this.props.children}
          </View>
        </View>
		);
	}
}

const styles = StyleSheet.create({
  ttContainer: {
    marginHorizontal: 20,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  ttBody: {
    padding: 15,
    marginTop: -5,
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
    // transform: [
    //   {rotate: '45deg'},
    //   {skewX: 0.7}
    // ], 
  },
});