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
import SportPicker from '../components/SportPicker';
import ClassPicker from '../components/ClassPicker';


export default class GettingStarted extends React.Component {

    state = {
        firstName: "First name",
        lastName: "Last name",
        sport: "Choose your sport.",
        classYear: "Choose your class year.",
    }

    updateSport = (sport) => {
        this.setState({sport: sport});
    }

    updateFirstName = (firstName) => {
        this.setState({firstName: firstName});
    }

    updateLastName = (lastName) => {
        this.setState({lastName: lastName});
    }

    updateClassYear = (classYear) => {
        this.setState({classYear: classYear});
    }

    static navigationOptions = {
        title: 'Getting Started',
    };

  render() {

    return (

      <ScrollView contentContainerStyle={styles.container}>
        <Header2>Welcome!</Header2>

        <Text>
        Welcome to the Colgate University Club Sports Concussion
        Management application! Please fill out the information below
        to get started.
        </Text>

        
        <Header3>Name</Header3>
        <Textbox placeholder="First name" handler={this.updateFirstName} autocorrect={false} value={this.state.firstName}/>
        <Textbox placeholder="Last name" handler={this.updateLastName} autocorrect={false} value={this.state.lastName}/>

        <Header3>Class Year</Header3>
        <ClassPicker classYear={this.state.classYear} updateClassYear={this.updateClassYear}/>

        <Header3>Sport</Header3>
        <SportPicker sport={this.state.sport} updateSport={this.updateSport}/>

        <ColoredButton 
            onPress={() => { this.props.navigation.navigate('PSHome');
                             this.props.updateInfo(this.state); }}>
        Submit
        </ColoredButton>
      </ScrollView>
    );
  }
}


GettingStarted = connect(null, 
                         dispatch => ({updateInfo: (state) => { dispatch({type: 'UPDATE_USER_INFO', state: state }); }})
                        )(GettingStarted);


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
