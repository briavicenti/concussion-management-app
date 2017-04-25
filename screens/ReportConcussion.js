import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
} from 'react-native';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Bold,
  BlockText,
} from '../components/TextComponents';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import InjurySourcePicker from '../components/InjurySourcePicker';

export default class ReportConcussion extends React.Component {

    state = {
        concussionDate: "",
        injurySource: "",
    }

    updateConcussionDate = (concussionDate) => {
        this.setState({concussionDate: concussionDate});
    }

    updateInjurySource = (injurySource) => {
        this.setState({injurySource: injurySource});
    }


    static navigationOptions = {
        title: 'Report Concussion',
    };

  render() {

    return (

      <ScrollView contentContainerStyle={styles.container}>
        <Header2>Report a Concussion</Header2>

        <Text>
        Welcome to the Colgate University Club Sports Concussion
        Management application! Please fill out the information below
        to get started.
        </Text>

        
        <Header3>Concussion Date</Header3>
        <Textbox placeholder="Concussion date (MM/DD/YY)" handler={this.updateConcussionDate} autocorrect={false} value={this.state.concussionDate}/>

        <Header3>How did your injury occur?</Header3>
        <InjurySourcePicker injurySource={this.state.injurySource} updateInjurySource={this.updateInjurySource}/>

        <ColoredButton 
            onPress={() => { this.props.navigation.navigate('SHome');
                             this.props.updateInfo(this.state); }}>
        Submit
        </ColoredButton>
      </ScrollView>
    );
  }
}


ReportConcussion = connect(null, 
                         dispatch => ({updateInfo: (state) => { dispatch({type: 'UPDATE_CONCUSSION_INFO', state: state }); }})
                        )(ReportConcussion);


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
