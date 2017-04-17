import React from 'react';
//import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  cAccent2,
  gAccent1,
} from '../../assets/styles.js';
import {
  Header3,
  Bold,
  BlockText,
} from '../../components/TextComponents';
import ColoredButton from '../../components/ColoredButton';
import SliderText from '../../components/SliderText';
import Slider from 'react-native-slider';

export default class BalanceProblems extends React.Component {

  state = {
    rating: 0,
  }

  render() {

    var symColor = cAccent2;
    var currSym = (<Text>Invalid position</Text>)
    
    if (this.state.rating == 0) {
      currSym = (<View style={styles.descriptionBox}>
                 <Header3 style={{color: symColor}}>0. No headache.</Header3>
                 </View>);
    }
    if (this.state.rating == 1) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>1. Very mild to mild headache.</Header3>
                 <Text>Your headache is noticeable during daily activities but does not impair them.</Text>
                 </View>)
    }
    if (this.state.rating == 2) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>2. Mild to moderate headache.</Header3>
                 <Text>Still can carry on normal activities but may face more difficulty than usual because of your headache.</Text>
                 </View>)
    }
    if (this.state.rating == 3) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>3. Moderate headache.</Header3>
                 <Text>Your headache is distracting and you may feel the need to slow down.</Text>
                 </View>)
    }
    if (this.state.rating == 4) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>4. Moderate to severe headache.</Header3>
                 <Text>Your activities are limited and you may struggle to concentrate.</Text>
                 </View>)
    }
    if (this.state.rating == 5) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>5. Severe headache.</Header3>
                 <Text> Lots of resting, little to no activity, and you may have difficulty concentrating or thinking.</Text>
                 </View>)
    }
    if (this.state.rating == 6) {
      currSym = (<View style={styles.descriptionBox}> 
                 <Header3 style={{color: symColor}}>6. Very severe headache.</Header3>
                 <Text>You have a hard time functioning at all and have difficulty speaking, thinking, and concentrating.</Text>
                 </View>)
    }

    return (
      <View>
        
        <View style={{ justifyContent: 'center',
                       alignItems: 'center',
                       paddingHorizontal: 10,
                       height: 130,
                       backgroundColor: symColor}}>
          <Text style={styles.symptomTitle}>Balance Problems</Text>
        </View>

        {currSym}

        <View style={{marginHorizontal: 25,}}>
          <SliderText rating={this.state.rating} color={symColor}/>

          <Slider
                value={this.state.rating}
                onValueChange={(rating) => this.setState({rating})} 
                minimumValue={0}
                maximumValue={6}
                step={1}
                thumbStyle={{width: 20, backgroundColor: symColor, top: 22,}}
                trackStyle={styles.trackStyle}
                minimumTrackTintColor={symColor}
                />
        </View>

        <ColoredButton style={{backgroundColor: symColor, marginBottom: 20,}}>
        Submit
        </ColoredButton>

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
  symptomTitleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 130,
  },
  symptomTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  descriptionBox: {
    marginHorizontal: 25,
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 160,
    padding: 10,
  },
  thumbStyle: {
    width: 10,
    backgroundColor: gAccent1,
  },
  trackStyle: {
    backgroundColor: gAccent1,
  }
});