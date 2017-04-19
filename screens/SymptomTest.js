import React from 'react';
//import { connect } from 'react-redux';
import {
  StyleSheet,
  View
} from 'react-native';
import Headache from '../components/symptoms/Headache';
import BalanceProblems from '../components/symptoms/BalanceProblems';

export default class SymptomTest extends React.Component {
  
  static navigationOptions = {
    title: 'Symptom Test',
  };

  state = {
    goToNext: false,
  }

  triggerNext(goToNext) {
    this.setState({goToNext: goToNext});
  }

  render() {
    //const { navigate } = this.props.navigation;


    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
    }

    var symList = [<Headache/>, <BalanceProblems/>]
    shuffleArray(symList);
    var currSym = symList[0];

    // i = 0;
    // while (i < symList.length) {
    //   if (this.state.goToNext) {
    //     i++
    //     currSym=symList[i];
    //     triggerNext(false);
    //   }
    // }

    return (

      <View>
        {currSym}
      </View>
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
