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
  cAccent1,
  cAccent2,
  cAccent3,
  cAccent4,
} from '../assets/styles';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import { StackNavigator } from 'react-navigation';

export default class ConcussionOverview extends React.Component {
  
  static navigationOptions = {
    title: 'Concussion Overview',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (

        <ScrollView contentContainerStyle={styles.container}>

          <Header2>Concussion Overview</Header2>
          
          <Header3>What is a concussion?</Header3>
          <BlockText>
          A concussion is an injury that affects the way the brain
          works or functions. Concussions can occur from direct or
          indirect forces to the head or neck that cause the brain to
          move inside of the skull. Symptoms may develop immediately
          or over the course of a few hours or days following the
          injury, and they may be short-lived or last for days or
          weeks. Concussions are not always associated with loss of
          consciousness or extreme injuries. Even minor bumps can
          cause significant concussion.{'\n'}
          </BlockText>
          <BlockText><Bold color={cAccent4}>
          Even though most concussions are mild, all concussions are
          potentially serious and may result in complications
          including prolonged brain damage and death if the concussion
          is not recognized and managed properly.{'\n'}
          </Bold></BlockText>


          <Header3>How is a concussion diagnosed?</Header3>
          <BlockText>
          Unlike typical sports injuries, you cannot see a concussion
          with x-ray, MRI, or CT scans. The only way to diagnose a
          concussion is through a combination of observing signs,
          reported symptoms by the athlete, and sometimes cognitive
          testing with a program such as the ImPACT (Immediate Post-
          Concussion Assessment and Cognitive Test).{'\n'}
          </BlockText>

          <Header3>What should I do if I think that I or a teammate have a concussion?</Header3>
          <BlockText>
          Athletes that exhibit signs, symptoms, and/or behaviors
          consistent with a concussion should be removed from play
          immediately. Continuing to play with the signs and symptoms
          of a concussion leaves the athlete vulnerable to greater
          injury.{'\n'}
          </BlockText>

          <BlockText><Bold color={cAccent4}>
          Any potential concussion sufferer should be taken directly
          to the emergency room if they experience any of the
          following symptoms:{'\n'}
          </Bold></BlockText>

          <Bullet color={cAccent4}><BlockText>Headaches that worsen, particularly if it becomes localized</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Seizures</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Neck pain</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Unusual behavior</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Being very drowsy or unable to stay awake</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Repeated vomiting</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Slurred speech</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Significant irritability</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Unable to recognize people or places</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Increasing confusion</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Weakness / numbness in arms or legs</BlockText></Bullet>
          <Bullet color={cAccent4}><BlockText>Less responsive than normal</BlockText></Bullet>


            <ColoredButton 
                onPress={() => {
                                //this.props.navigation.navigate('EdModules');
                                this.props.markSectionDone();
                            }}>
            Next Module
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

ConcussionOverview = connect(
                        null, 
                        dispatch => ({markSectionDone: () => {dispatch({section: 'edStage', type: 'CHANGE_STAGE', state: 2})}})
                        )(ConcussionOverview);

