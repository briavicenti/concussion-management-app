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

    var demoUser = ({
      firstName: 'Bria',
      lastName: 'Vicenti',
      sport: 'rugby',
      classYear: 2017,
    });

    var demoConcussion = ({
      concussionDate: "04/22/17",
      injurySource: "Contact with equipment",
    });

    var demoReports = ({
      Headache: [2,1],
      NauseaVomiting: [1,0],
      BalanceProblems: [1,2],
      Dizziness: [2,0],
      Fatigue: [0,2],
      TroubleFallingAsleep: [3,2],
      IncreasedSleep: [0,0],
      DecreasedSleep: [2,2],
      Drowsiness: [3,1],
      SensitivityToLight: [1,1],
      SensitivityToNoise: [2,1],
      Irritability: [0,2],
      Sadness: [3,2],
      Anxiety: [4,2],
      FeelingEmotional: [2,4],
      NumbnessTingling: [0,0],
      FeelingSluggish: [1,1],
      FeelingDazed: [2,1],
      DifficultyConcentrating: [5,3],
      DifficultyRemembering: [1,1],
      VisionProblems: [2,0],
    });

    var d1 = new Date("2017", "03", "24");
    var d2 = new Date("2017", "03", "26");

    var demoDates = [d1, d2];

    return (
      <BackgroundImage url={require('../assets/greengrunge.jpg')}>
          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/logowhite.png')}
              style={styles.logoContainer}
            />
            <Text style={styles.welcomeText}>Thesis</Text>

            <TouchableOpacity onPress={() => { navigate('GettingStarted'); this.props.beginPS(); }}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>Let's Get Started</Text>
            </View>
            </TouchableOpacity>

            {/*
            <TouchableOpacity onPress={() => { navigate('Demo'); this.props.beginDemo(demoUser, demoDates, demoConcussion, demoReports); }}>
            <View style={styles.startedButton}>
            <Text style={styles.startedButtonText}>Demo</Text>
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
    width: 280,
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

Home = connect(null, dispatch => ({beginPS: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 1})},
                                   beginDemo: (user, dates, concussion, ratings) => {dispatch({type: 'START_DEMO', user: user, dates: dates, concussion: concussion, ratings: ratings})},
                             }))(Home); // Get progress stage
