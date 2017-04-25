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
import VerticalProgressBar from '../components/VerticalProgressBar';
import HorizontalProgressBar from '../components/HorizontalProgressBar';
import Tooltip from '../components/Tooltip';
import PBWaiver from '../components/PBWaiver';
import PBVideo from '../components/PBVideo';
import PBEducation from '../components/PBEducation';
import PBBaseline from '../components/PBBaseline';
import ColoredButton from '../components/ColoredButton';

export default class PSHome extends React.Component {

  static navigationOptions = {
    title: 'Pre-Season Home',
  };

  render() {

    const { navigate } = this.props.navigation;

    var content = (<Text>Invalid state</Text>);

    switch(this.props.psStage) {
      case 1:
        content = (<PBVideo navigation={this.props.navigation}/>);
        break;
      case 2: 
        content = (<PBEducation navigation={this.props.navigation}/>);
        break;
      case 3: 
        content = (<PBWaiver navigation={this.props.navigation}/>);
        break;
      case 4:
        content = (<PBBaseline navigation={this.props.navigation}/>);
        break;
    }

    if (this.props.edStage > 4) {
      this.props.markEdDone();
    }

    return (
      <ScrollView style={styles.container}>
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.props.firstPSVisit}
          >
          <View style={styles.popup}>
            <Header3>
            Welcome to your pre-season home!
            </Header3> 
            <Text style={{fontSize: 18}}>Your athletic administrator has asked you to complete the
            following tasks before you start your season.</Text>
            <VerticalProgressBar/>
            <Text style={{fontSize: 18}}>Your deadline to complete these tasks is <Bold style={{fontSize: 18}}>5/6/17</Bold>.</Text>
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
        <Header1 style={{marginLeft: 20, marginBottom: 5,}}>
        Welcome, {this.props.userInfo.firstName}!
        </Header1>

        <HorizontalProgressBar progress={this.props.psStage}>
        {content}
        </HorizontalProgressBar>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'space-between',
  },
});


PSHome = connect(store => ({userInfo: store.userInfo || {}, psStage: store.psStage, edStage: store.edStage, firstPSVisit: store.firstPSVisit}),
                 dispatch => ({markEdDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 3,})},
                               markFirstVisit: () => {dispatch({section: 'firstPSVisit', type: 'MARK_COMPLETE', state: false})},
                             })
                 )(PSHome); // Get progress stage

// Handle progress state changes
// PSHome = connect(store => ({psStage: store.psStage}))(PSHome); // Get progress stage
// PSHome = connect(store => ({edStage: store.edStage}))(PSHome); // Get education module stage
// PSHome = connect(
//                         null, 
//                         dispatch => ({markEdDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 3})}})
//                         )(PSHome); // Mark education done


// Handle first visit
// PSHome = connect(
//                         null, 
//                         dispatch => ({markFirstVisit: () => {dispatch({section: 'firstPSVisit', type: 'MARK_COMPLETE', state: false})}})
//                         )(PSHome);
//PSHome = connect(store => ({firstPSVisit: store.firstPSVisit}))(PSHome);
