import React from 'react';
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

            <TouchableOpacity onPress={() => navigate('PSHome')}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>Let's get started.</Text>
            </View>
            </TouchableOpacity>

          
            {/*}
            <TouchableOpacity onPress={() => navigate('SymptomTest')}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>Symptom Test</Text>
            </View>
            </TouchableOpacity>
          */}
          

            {/*
            <TouchableOpacity onPress={() => navigate('SymptomProgress')}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>Symptom Progress</Text>
            </View>
            </TouchableOpacity>
          */}

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
    paddingBottom: 80,
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
  },
  startedButtonText: {
    color: '#328F9C',
    fontSize: 40,
  },
});