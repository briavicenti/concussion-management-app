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
  cAccent4,
  cAccent5,
} from '../assets/styles';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import { StackNavigator } from 'react-navigation';

export default class SignsAndSymptoms extends React.Component {
  
  static navigationOptions = {
    title: 'Signs & Symptoms',
  };

  render() {
    const { navigate } = this.props.navigation;
    
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Header2>Signs and Symptoms</Header2>
            
            <BlockText>
            The signs and symptoms of your concussion may develop
            immediately following the injury or can take hours or days
            to fully appear. Everyone experiences concussion symptoms
            in a different way, and you may find the symptoms you
            experience changing throughout your recovery process.{'\n'}
            </BlockText>
            <BlockText>
            There are four categories of symptoms that you might
            experience when suffering from a concussion.{'\n'}
            </BlockText>

            <Header3 style={{color: cAccent1}}>Emotional Symptoms</Header3>

            <Bullet color={cAccent1}><BlockText>Sadness</BlockText></Bullet>
            <Bullet color={cAccent1}><BlockText>Irritability</BlockText></Bullet>
            <Bullet color={cAccent1}><BlockText>Nervousness / anxiety</BlockText></Bullet>
            <Bullet color={cAccent1}><BlockText>Changes in emotional state / "feeling emotional"</BlockText></Bullet>

            <Header3 style={{color: cAccent2}}>{'\n'}Sleep Symptoms</Header3>

            <Bullet color={cAccent2}><BlockText>Trouble falling asleep</BlockText></Bullet>
            <Bullet color={cAccent2}><BlockText>Increased sleep habits</BlockText></Bullet>
            <Bullet color={cAccent2}><BlockText>Decreased sleep habits</BlockText></Bullet>
            <Bullet color={cAccent2}><BlockText>Drowsiness</BlockText></Bullet>

            <Header3 style={{color: cAccent4}}>{'\n'}Cognitive Symptoms</Header3>

            <Bullet color={cAccent4}><BlockText>Feeling dazed / "foggy"</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Feeling sluggish / "slowed down"</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Difficulty concentrating</BlockText></Bullet>
            <Bullet color={cAccent4}><BlockText>Difficulty remembering</BlockText></Bullet>

            <Header3 style={{color: cAccent5}}>{'\n'}Physical Symptoms</Header3>

            <Bullet color={cAccent5}><BlockText>Headache</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Nausea / vomiting</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Dizziness</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Balance problems</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Sensitivity to light</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Sensitivity to noise</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Fatigue</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Numbness / tingling</BlockText></Bullet>
            <Bullet color={cAccent5}><BlockText>Vision problems{'\n'}</BlockText></Bullet>


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
    backgroundColor: '#fff'
  },
});

SignsAndSymptoms = connect(
                        null, 
                        dispatch => ({markSectionDone: () => {dispatch({section: 'edStage', type: 'CHANGE_STAGE', state: 3})}})
                        )(SignsAndSymptoms);
