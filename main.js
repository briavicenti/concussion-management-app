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

// education modules
import EdModules from './screens/EdModules'
// import ConcussionOverview from './screens/ConcussionOverview';
// import SignsAndSymptoms from './screens/SignsAndSymptoms';
// import ConcussionRecovery from './screens/ConcussionRecovery';
// import ReturnToPlay from './screens/ReturnToPlay';

// in season
import SHome from './screens/SHome';
import SymptomTest from './screens/SymptomTest';
import SymptomProgress from './screens/SymptomProgress';



const reducer = (state = {}, action) => {
  switch(action.type) {
    case 'MARK_COMPLETE':
      return {...state, [action.section]: action.state};
    case 'CHANGE_STAGE':
      return {...state, [action.section]: action.state};
    case 'INCREASE_STAGE':
      return {...state, [action.section]: action.state+1};
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
  // Preseason items
  PSHome: { screen: PSHome },
  ConcussionVid: { screen: ConcussionVid },
  CodeOfConduct: { screen: CodeOfConduct },
  ConcussionPolicy: { screen: ConcussionPolicy },
  // Education modules
  EdModules: { screen: EdModules },
  // ConcussionOverview: { screen: ConcussionOverview },
  // SignsAndSymptoms: { screen: SignsAndSymptoms },
  // ConcussionRecovery: { screen: ConcussionRecovery },
  // ReturnToPlay: { screen: ReturnToPlay },


  // In Season
  SHome: { screen: SHome },
  SymptomTest: { screen: SymptomTest },
  SymptomProgress: { screen: SymptomProgress },

});

Expo.registerRootComponent(App);
