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
  cAccent3,
  cAccent4
} from '../assets/styles';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import { StackNavigator } from 'react-navigation';

export default class ConcussionRecovery extends React.Component {
  
  static navigationOptions = {
    title: 'Concussion Recovery',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Header2>Concussion Recovery</Header2>

            <BlockText><Bold color={cAccent4}>Concussions take time to heal.{'\n'}</Bold></BlockText>
            <BlockText>
            It is absolutely vital that if you do not return to play
            or partake in physical activity before your concussion
            symptoms subside. There is an increased risk of
            significant damage if an athlete suffers a second
            concussion before the earlier concussion has completely
            healed. This can lead to a condition call “second-impact
            syndrome” that can result in prolonged recovery or even
            possible brain swelling with devastating and sometimes
            fatal consequences.{'\n'}
            </BlockText>

            <Bold color={cAccent4}>
            Simply put, it is not worth it to return to play earlier
            than you are ready.{'\n'}
            </Bold>

            <Header3>There are many strategies you can use to limit the exacerbation of symptoms:</Header3>

            <Bullet color={cAccent3}><BlockText>Take care of your basic needs - hydrate well, eat well, and get as much rest as you are able.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Allow yourself to wake up naturally, without an alarm clock.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Avoid or limit texting, watching TV, using computers, and reading.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Avoid activities that include loud noises and bright lights.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Rest for short blocks of time if daily activities exacerbate symptoms.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Postpone academic work and avoid other mentally draining tasks.</BlockText></Bullet>
            <Bullet color={cAccent3}><BlockText>Avoid consuming alcohol, caffeine, or using other drugs or stimulants.</BlockText></Bullet>

            <BlockText>
            {'\n'}Remember - trying to “tough it out” will only make your
            symptoms worse and your return to play slower. You should
            expect to feel better as the days go by, but you should
            keep in regular contact with an administrative official or
            health professional if symptoms are not subsiding.{'\n'}
            </BlockText>

            <ColoredButton 
                onPress={() => {
                                this.props.navigation.navigate('PSHome');
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

ConcussionRecovery = connect(
                        null, 
                        dispatch => ({markSectionDone: () => {dispatch({section: 'edStage', type: 'CHANGE_STAGE', state: 4})}})
                        )(ConcussionRecovery);
