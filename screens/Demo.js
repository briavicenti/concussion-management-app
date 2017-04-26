import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { 
  Bold, 
  Header1, 
  Header2, 
  Header3 
} from '../components/TextComponents';
import {
  gAccent1,
  cAccent1,
  cAccent2,
  cAccent4,
  cAccent5,
} from '../assets/styles';
import ColoredButton from '../components/ColoredButton';

export default class Demo extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>

        <Image
            source={require('../assets/brain.png')}
            style={styles.logoContainer}
        />

        <Header1 style={{marginLeft: 20, marginBottom: 5, alignSelf: 'center'}}>
        Demo Page
        </Header1>
        <Header3>For the purposes of the demo, information has been prefilled.</Header3>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() =>  { navigate('PSHome'); this.props.beginPS(); }}>
            <View style={styles.startedButton}>
            <Text style={{color: cAccent1, fontSize: 45, textAlign: 'center'}}>Pre-Season Home</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigate('SHome')}>
            <View style={styles.startedButton}>
            <Text style={{color: cAccent4, fontSize: 45, textAlign: 'center'}}>In-Season Home</Text>
            </View>
        </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: 55,
    height: 55,
    margin: 10,
    alignSelf: 'center',
  },
  popup: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    margin: 10,
    marginTop: 70,
    padding: 10,
    justifyContent: 'center',
    height: 500,
  },
  startedButton: {
    backgroundColor: '#fff',
    padding: 15,
    width: 280,
    marginTop: 25,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startedButtonText: {
    fontSize: 35,
    textAlign: 'center',
  },
});


Demo = connect(null, dispatch => ({beginPS: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 1})},
                             }))(Demo); // Get progress stage
