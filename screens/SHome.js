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

export default class SHome extends React.Component {
  state = {
    modalVisible: true,
    progress: 4,
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;

    var name = "User";

    if (this.props.userInfo != null) {
      name = this.props.userInfo.firstName;
    }

    return (
      <ScrollView style={styles.container}>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.props.firstSVisit}
          >
          <View style={styles.popup}>
            <Header3>
            Welcome to your regular season home!
            </Header3> 
            <Text style={{fontSize: 18}}>Now that you have completed all of your preseason tasks, this will be your new home page. You can use this screen to:{'\n'}</Text>
            <View style={{padding: 10, borderBottomWidth: 1, borderTopWidth: 1, borderColor: gAccent1}}>
            <Header2>- Report a concussion.</Header2>
            <Header2>- Complete a symptom check.</Header2>
            <Header2>- Check your symptom progress.</Header2>
            </View>
            <Text>{'\n'}Have a great season, {name}!</Text>
            <ColoredButton
              onPress={() => {this.props.markFirstVisit()}}>
              Okay
            </ColoredButton>
          </View>
        </Modal>

        <Image
            source={require('../assets/brain.png')}
            style={styles.logoContainer}
        />

        <Header1 style={{marginLeft: 20, marginBottom: 5, alignSelf: 'center'}}>
        Welcome, {name}!
        </Header1>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigate('ReportConcussion')}>
            <View style={styles.startedButton}>
            <Text style={{color: cAccent1, fontSize: 45, textAlign: 'center'}}>Report a Concussion</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigate('SymptomTest')}>
            <View style={styles.startedButton}>
            <Text style={{color: cAccent4, fontSize: 30, textAlign: 'center'}}>Symptom Test</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigate('SymptomProgress')}>
            <View style={styles.startedButton}>
            <Text style={{color: cAccent5, fontSize: 30, textAlign: 'center'}}>Symptom Progress</Text>
            </View>
        </TouchableOpacity>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    width: 70,
    height: 70,
    marginTop: 15,
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

SHome = connect(store => ({userInfo: store.userInfo, firstSVisit: store.firstSVisit}),
                 dispatch => ({ markFirstVisit: () => {dispatch({section: 'firstSVisit', type: 'MARK_COMPLETE', state: false})},
                             })
                 )(SHome);