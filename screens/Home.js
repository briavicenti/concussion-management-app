import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import BackgroundImage from '../components/BackgroundImage'

export default class Home extends React.Component {
  
  static navigationOptions = {
    title: 'Home',
    header: {
      visible: false,
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <BackgroundImage url={require('../assets/greengrunge.jpg')}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/logowhite.png')}
              style={styles.logoContainer}
            />
            <Text style={styles.welcomeText}>Thesis</Text>

            <TouchableOpacity onPress={() => { navigate('PSHome'); this.props.beginPS(); }}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>PSHome</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('SHome')}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>SHome</Text>
            </View>
            </TouchableOpacity>

          </View>
      </BackgroundImage>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  welcomeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40,
  },
  logoContainer: {
    width: 100,
    height: 110,
    overflow: 'visible',
  },
  welcomeText: {
    fontSize: 60,
    color: '#fff',
    backgroundColor: 'transparent',

  },
  startedButton: {
    backgroundColor: '#fff',
    padding: 10,
    width: 210,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startedButtonText: {
    color: '#328F9C',
    fontSize: 40,
    textAlign: 'center',
  },
});

Home = connect(
                        null, 
                        dispatch => ({beginPS: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 1})}})
                        )(Home);