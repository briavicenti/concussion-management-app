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
  gAccent1,
  gAccent2,
  gAccent3,
  bg,
} from '../assets/styles';
import SymReportDropdown from '../components/SymReportDropdown';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';

// const SECTIONS = [
//   {
//     title: 'First symptom report',
//     content: 'SO MUCH CONTENT HERE HOLLA',
//   },
//   {
//     title: 'Second symptom report',
//     content: 'SO MUCH CONTENT HERE HOLLA',
//   },
//   {
//     title: 'Second symptom report',
//     content: 'SO MUCH CONTENT HERE HOLLA',
//   }
// ];

export default class SymReports extends React.Component {

  renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.reportDate}</Text>
        <Icon name={isActive ? 'angle-down' : 'angle-up'} size={30} color={'#fff'}/>
      </View>
    );
  }

  renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.Headache}</Text>
      </View>
    );
  }

  render() {

    console.log(this.props.reportDates);

    var sections = this.props.reportDates.map((currDate, index) => {
      console.log(currDate);
      console.log(index);
      return ({
        reportDate: (currDate.getMonth()+1)+"/"+currDate.getDate()+"/"+currDate.getFullYear(),
        Headache: this.props.symptomRatings.Headache[index],
      });
    });

    return (

      <View style={{backgroundColor: '#fff', marginHorizontal: 20, padding: 20}}>
        <Text style={{color: gAccent2, fontSize: 20, fontWeight: 'bold', marginBottom: 15, alignSelf: 'center'}}>Individual Symptom Reports</Text>

        <Accordion
          sections={sections}
          renderHeader={this.renderHeader}
          renderContent={this.renderContent}
        />
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
  header: {
    backgroundColor: gAccent1,
    // borderBottomWidth: 1,
    // borderColor: '#fff',
    marginVertical: 2,
    padding: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    //fontWeight: 'bold',
  },
  // content: {
  //   backgroundColor: bg,
  // }
});

SymReports = connect(store => ({symptomRatings: store.symptomRatings, reportDates: store.reportDates, concussionInfo: store.concussionInfo}),
                 )(SymReports);

