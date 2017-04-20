import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Bold,
  BlockText,
  Bullet
} from '../components/TextComponents';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';
import { StackNavigator } from 'react-navigation';

export default class CodeOfConduct extends React.Component {
  
  static navigationOptions = {
    title: 'Code of Conduct',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (

      <ScrollView contentContainerStyle={styles.container}>
        <Header2>   
        Colgate Club Sport Student-Athlete Code of Conduct and
        Statement of Responsibility  
        </Header2>
        <BlockText>
        It is required that all club athletes understand and comply
        with the details of this agreement.
        {'\n'}
        </BlockText>
        
        <Header3>Standards of Conduct</Header3>
        <BlockText>
        Club members are ambassadors of Colgate University as
        participants of a university sponsored club. As an ambassador, club
        members are expected to act in a mature and responsible manner both on
        and off campus in all club related activity. 
        </BlockText>
        <BlockText>
        {'\n'}It is a privilege and not a right to be a club sport student-athlete at Colgate. Every club
        sport student-athlete is expected to conduct him/herself in a manner
        that reflects positively on the program, the Department of Recreation
        and Colgate University. As a member of the student body at Colgate,
        each club sport student-athlete must act in accordance with all
        University policies and procedures as published by the University.
        {'\n'}
        </BlockText>

        <Header3>Code of Ethics for Student-Athlete</Header3>

        <Header4>Alcohol Use</Header4>
        <BlockText>
        Colgate University expects each club sport student-athlete to
        adhere to a set of standards that positively represents the
        Department of Recreation and the University. The Department of
        Recreation sets forth a code of ethics for alcohol and drug
        use to clearly define its position and expectation regarding
        these issues. A club sport student-athlete is responsible for
        complying with all federal, state, University and Department
        guidelines pertaining to alcohol and drug use. This Code of
        Ethics is considered to be a minimum requirement, and club
        sport coach’s and captain may set higher standards in a
        separate team policy.{'\n'}
        </BlockText>

        <Header4>Unacceptable Behavior</Header4>
        <Bullet><BlockText>Drinking and driving a motor vehicle (please also reference
        2007-2009 Colgate University Student Handbook p. 113)</BlockText></Bullet>
        <Bullet><BlockText>The use of alcohol by student-athletes when they are engaged in activities
        relating to practices, contests, team trips, team meetings, locker
        room activities and banquets.</BlockText></Bullet>
        <Bullet><BlockText>Use of alcohol that interferes with
        academic success or athletic performance, or leads to legal problems.</BlockText></Bullet>
        <Bullet><BlockText>Irresponsible use of alcohol and/or intoxication in a public place.</BlockText></Bullet>
        <Bullet><BlockText>Drinking with or providing alcohol or drugs to recruits, including
          specifically the individual host(s) to whom the recruit is assigned.</BlockText></Bullet>
        <Bullet><BlockText>Possession or use of alcohol or drugs under any circumstance in which
          such possession or use is unlawful.{'\n'}</BlockText></Bullet>

        <Header4>Drugs</Header4>
        <BlockText>
        Colgate University and the Department of Recreation do not
        condone the medically-unsupervised use, possession, sale,
        manufacture or distribution of drugs that may involve medical
        or psychological hazards to individuals or that may tend to
        interfere with the rights and privileges of others.{'\n'}
        </BlockText>

        <Header4>Hazing</Header4>
        <BlockText>
        Colgate University policy and New York State law, strictly
        prohibit all forms of hazing, including in connection with
        initiation or continuing affiliation with a Club Sport. Hazing
        is illegal at Colgate and is therefore not to be associated
        with any clubs. Hazing is generally defined as being any
        action or activity [whether on or off campus] which recklessly
        endangers the physical or mental health or well being of
        another person or which violates the dignity of another
        person. Hazing is further defined as any activity that
        involves the forced consumption of food, alcohol or drugs or
        any other substance in the course of initiation or continuing
        affiliation with an organization. Groups which are found to
        have violated the university hazing policy as stated in the
        Colgate Student Handbook will forfeit recognition.{'\n'}
        </BlockText>

        <Header4>Violations</Header4>
        <BlockText>
        Violations of the following and other University regulations
        and/or unwillingness to abide by the policies of the Colgate
        University Department of Recreation Club Sport Program such
        as: falsification of documents, failure to submit changes of
        information, failure to submit appropriate paperwork by
        deadlines, utilization of University facilities without prior
        authorization, and failure of club officers to fulfill their
        designated responsibilities may result in loss of club sport
        status for a designated amount of time.{'\n'}
        </BlockText>


        <Header2>
        By signing this form, I agree to the following statements:
        </Header2>

        <Checkbox><BlockText><Bold>I understand and agree to the Colgate Code of Conduct 
        for all club sport student-athletes.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I understand that hazing is illegal at Colgate and is 
        therefore not to be associated with any clubs.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I understand and agree that I have received and I am
        responsible for knowing and understanding and complying with
        all rules, policies and procedures that are set forth or
        described in this Colgate University Club Sport Student-
        Athlete Code of Conduct and Statement of Responsibility.</Bold></BlockText></Checkbox>

        
        <Header3>Name</Header3>

        <View style={{flexDirection: 'row'}}>
            <Textbox 
                placeholder='First name' 
                style={{flex: 1}}
                autoCorrect={false}
            />
            <Textbox 
                placeholder='Last name' 
                style={{flex: 1}}
                autoCorrect={false}
            />
        </View>

        <Header3>Date</Header3>
        <Textbox 
            placeholder='Date (MM/DD/YYYY)' 
            style={{flex: 1}}
            autoCorrect={false}
        />

        <ColoredButton 
            onPress={() => {
                            this.props.navigation.navigate('PSHome');
                            this.props.markComplete();
                        }}>
        Submit
        </ColoredButton>
      </ScrollView>
    );
  }
}

CodeOfConduct = connect(
                        null, 
                        dispatch => ({markComplete: () => {dispatch({section: 'codeOfConduct', type: 'MARK_COMPLETE', state: true})}})
                        )(CodeOfConduct);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    //alignItems: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
