import React from 'react';
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
import ColoredButton from '../components/ColoredButton';

export default class PSHome extends React.Component {
  state = {
    modalVisible: true,
    progress: 3,
  }
  
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    title: 'Pre-Season Home',
  };

  render() {
    const { navigate } = this.props.navigation;

    var content = (<Text>Invalid state</Text>);

    if (this.state.progress == 1) {
      content = (<PBVideo navigation={this.props.navigation}/>);
    }
    else if (this.state.progress == 2) {
      content = (<PBEducation navigation={this.props.navigation}/>);
    }
    else if (this.state.progress == 3) {
      content = (<PBWaiver navigation={this.props.navigation}/>);
    }
    else {
      content = (<Text>How will we do this??</Text>);
    }

    return (
      <ScrollView style={styles.container}>
        {/* TO DO: This should only pop up on the first visit*/}
        <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.modalVisible}
          >
          <View style={styles.popup}>
            <Header3>
            Welcome to your pre-season home!
            </Header3> 
            <Text>Your athletic administrator has asked you to complete the
            following tasks before you start your season.</Text>
            <VerticalProgressBar/>
            <Text>Your deadline to complete these tasks is <Bold>Deadline</Bold>.</Text>
            <ColoredButton
              onPress={() => {this.setModalVisible(false)}}>
              Okay
            </ColoredButton>
          </View>
        </Modal>


        {/* TO DO: This should change w/ the user's progress in the education module*/}
        <Image
            source={require('../assets/bgbwhite.png')}
            style={styles.logoContainer}
        />
        <Header1 style={{marginLeft: 20, marginBottom: 5,}}>
        Welcome, Bria!
        </Header1>

        <HorizontalProgressBar progress={this.state.progress}>
        {content}
        </HorizontalProgressBar>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D0D0D0',
  },
  logoContainer: {
    width: 50,
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