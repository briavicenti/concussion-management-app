import Expo from 'expo';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { setCustomText } from 'react-native-global-props';

// begin
import Home from './screens/Home';
import GettingStarted from './screens/GettingStarted';

// Preseason Stuff
import PSHome from './screens/PSHome';
import CodeOfConduct from './screens/CodeOfConduct';
import ConcussionPolicy from './screens/ConcussionPolicy';
//import ConcussionVid from './screens/ConcussionVid';
import EdModules from './screens/EdModules'

// in season
import SHome from './screens/SHome';
import ReportConcussion from './screens/ReportConcussion';
import SymptomTest from './screens/SymptomTest';
import SymptomProgress from './screens/SymptomProgress';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'MARK_COMPLETE':
      return {...state, [action.section]: action.state};
    case 'CHANGE_STAGE':
      return {...state, [action.section]: action.state};
    case 'MARK_INFO':
      return {...state, [action.section]: action.state};
    case 'UPDATE_USER_INFO':
      return {...state, userInfo: action.state};
    case 'UPDATE_CONCUSSION_INFO':
      return {...state, concussionInfo: action.state};
    case 'ADD_SYMPTOM_RATING':
      return {...state, symptomRatings: {...state.symptomRatings, [action.symptom]: action.ratings}};
    case 'ADD_REPORT_DATE':
      return {...state, reportDates: action.dates};
    default:
      return state;
  }
}


const store = createStore(reducer);

class App extends React.Component {
  render() {
    const customTextProps = {
      style: {
        fontFamily: 'Avenir',
        fontSize: 18,
      }
    }

    setCustomText(customTextProps);

    return(

      <Provider store={store}>
      <AppNavigator/>
      </Provider>
    );
  }
}

const AppNavigator = StackNavigator( {
  Home: { screen: Home },
  GettingStarted: { screen: GettingStarted },
  // Preseason items
  PSHome: { screen: PSHome },
  CodeOfConduct: { screen: CodeOfConduct },
  ConcussionPolicy: { screen: ConcussionPolicy },
  // Education modules
  EdModules: { screen: EdModules },

  // In Season
  SHome: { screen: SHome },
  ReportConcussion: { screen: ReportConcussion },
  SymptomTest: { screen: SymptomTest },
  SymptomProgress: { screen: SymptomProgress },

});

Expo.registerRootComponent(App);
