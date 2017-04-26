import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  ScrollView,
  Text,
  View
} from 'react-native';
import {
  cAccent1,
  cAccent2,
  cAccent3,
  cAccent4,
  cAccent5,
  gAccent2,
} from '../assets/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SymReportDropdownBox extends React.Component {

  render() {

    return (

      <View style={{backgroundColor: this.props.color, marginHorizontal: 5, marginBottom: 5, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', padding: 5}}>
      <Text style={{color: '#fff', fontSize: 15}}>{this.props.sym}</Text>
      <Icon name='long-arrow-right' size={18} color='#fff' style={{marginHorizontal: 5}}/> 
      <Text style={{color: '#fff', fontSize: 15}}>{this.props.rating}</Text>
      {/*<Text style={{color: '#fff', fontSize: 16}}>{this.props.rating}</Text>*/}
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