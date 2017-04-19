import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Bold,
  BlockText,
  Bullet
} from '../components/TextComponents';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import { StackNavigator } from 'react-navigation';

export default class ReturnToPlay extends React.Component {
  
  static navigationOptions = {
    title: 'Return to Play',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

        <ScrollView>
            <Text>Concussion Overview Here</Text>

            <ColoredButton 
                onPress={() => {
                                this.props.navigation.navigate('PSHome');
                                this.props.markComplete();
                            }}>
            Submit
            </ColoredButton>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
