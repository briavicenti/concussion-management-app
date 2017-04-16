import Expo from 'expo';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { setCustomText } from 'react-native-global-props';
import Home from './screens/Home';
import PSHome from './screens/PSHome';
import CodeOfConduct from './screens/CodeOfConduct';
import ConcussionPolicy from './screens/ConcussionPolicy';
import ConcussionVid from './screens/ConcussionVid';
import SymptomTest from './screens/SymptomTest';
import SymptomProgress from './screens/SymptomProgress';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'MARK_EDUCATION':
      return {...state, [action.section]: action.state};
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
  // Preseason items
  PSHome: { screen: PSHome },
  ConcussionVid: { screen: ConcussionVid },
  CodeOfConduct: { screen: CodeOfConduct },
  ConcussionPolicy: { screen: ConcussionPolicy },
  // In Season
  SymptomTest: { screen: SymptomTest },
  SymptomProgress: { screen: SymptomProgress }

});

Expo.registerRootComponent(App);
