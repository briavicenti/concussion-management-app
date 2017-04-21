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
import {
  cAccent4,
} from '../assets/styles';
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

        <ScrollView contentContainerStyle={styles.container}>
            <Header2>Return to Play</Header2>

            <BlockText>
            When your symptoms have totally subsided and regular
            everyday activities don’t bring them back, you can seek
            clearance from a medical professional to begin the Return-
            To-Play protocol. This clearance may involve additional
            measures such as a neurocognitive evaluation or a balance
            test.{'\n'}
            </BlockText>

            <BlockText>
            When you have been cleared to begin the protocol, you will
            go through a five stage progression of physical activity
            to return to your full sport. Each stage will be separated
            by 24 hours at minimum. If at any point your symptoms
            return during the progression, the process will be paused
            to ensure that symptoms subside and you can resume your
            journey to a complete recovery as soon as possible.{'\n'}
            </BlockText>

            <Bold color={cAccent4}>The five stages of physical activity in the Return-To-Play protocol are the following:{'\n'}</Bold>
            <Bullet color={cAccent4}><BlockText>Light, non-impact, non-jarring physical activity (ex: stationary biking).</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Sport-specific activities with no threat of contact from others (ex: passing, practicing shooting).</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Non-contact training with others and a return to resistance training.</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Full-contact practice (not a competition).</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Full return to play.</BlockText></Bullet>



            <BlockText>
            {'\n'}Attempting to circumvent the Return-To-Play process will
            likely only lead your true recovery to be longer, leaving
            you vulnerable for further injury and opening up the
            possibility that you may have to stop playing your sport
            permanently.  Honesty with yourself and your athletic
            administrators regarding your recovery process is the key
            to a successful recovery!
            </BlockText>

            <ColoredButton 
                onPress={() => {
                                this.props.navigation.navigate('PSHome');
                                this.props.markEdDone();
                            }}>
            Finish Education Module
            </ColoredButton>
        </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 15,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
});

ReturnToPlay = connect(
                        null, 
                        dispatch => ({markEdDone: () => {dispatch({section: 'psStage', type: 'CHANGE_STAGE', state: 3})}})
                        )(ReturnToPlay); // Mark education done

// ReturnToPlay = connect(
//                         null, 
//                         dispatch => ({markSectionDone: () => {dispatch({section: 'edStage', type: 'CHANGE_STAGE', state: 5})}})
//                         )(ReturnToPlay);
