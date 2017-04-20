import React from 'react';
import { connect } from 'react-redux';
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

  render() {

    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array;
    }

    const symList = [<Headache symNum={this.props.symNum}/>]
    shuffleArray(symList);

    if (this.props.symNum < symList.length) {
      var currSym = symList[this.props.symNum];
    }

    return (

      <View>
        { (this.props.symNum < symList.length) && currSym }
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

SymptomTest = connect(store => ({symNum: store.symNum}))(SymptomTest);



SymptomTest = connect(
                        null, 
                        dispatch => ({increaseSymNum: () => {dispatch({section: 'symNum', type: 'CHANGE_STAGE', state: store.symNum+1})}})
                        )(SymptomTest); // Increase sym num

