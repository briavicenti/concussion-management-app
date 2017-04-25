import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
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
import { StackNavigator } from 'react-navigation';
import Checkbox from '../components/Checkbox';
import Textbox from '../components/Textbox';
import ColoredButton from '../components/ColoredButton';

export default class ConcussionPolicy extends React.Component {
  
    state = {
        firstName: "First name",
        lastName: "Last name",
        date: "Date (MM/DD/YY)",
    }

    updateFirstName = (firstName) => {
        this.setState({firstName: firstName});
    }

    updateLastName = (lastName) => {
        this.setState({lastName: lastName});
    }

    updateDate = (date) => {
        this.setState({date: date});
    }


  static navigationOptions = {
    title: 'Concussion Policy',
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

        <Header3>Concussion and Injury Reporting</Header3>

        <Header4>Accident/Injury Reports</Header4>
        <BlockText>
        Club officers are required to submit an individual accident
        report for injuries, which occur during club activity. Injuries that
        require immediate emergency care and/or require the student-athlete be
        removed from play and not return should be reported to the Director of
        Recreation. {'\n'}</BlockText>

        <BlockText>These reports should be submitted to the Recreation Office
        within 24-hours of the injury, or immediately upon return to Hamilton,
        NY. Submit report through by E-Mail to the Director of Recreation.
        Those individuals injured during club sport events (practice or
        competition) are highly encouraged to seek medical attention from the
        campus physicians at Student Health Services (SHS). Call ahead to make
        an appointment or drop-in. The phone number for SHS is 315-228-7750.{'\n'}
        </BlockText>
        
        <Header4>Colgate University Recreation Concussion Policy</Header4>
        <BlockText>
        A concussion is a brain injury that may be caused by a bump,
        blow, or hit to the head or a blow to another part of the body
        where the force is transmitted to the head. All concussions
        and brain injuries are potentially serious and often occur
        without loss of consciousness. Symptoms include (but are not
        limited to) transient confusion, disorientation, impaired
        consciousness, dysfunction of memory, loss of consciousness,
        seizures, irritability, lethargy, vomiting, headache,
        dizziness, or fatigue.
        </BlockText> 

        <BlockText>{'\n'}A participant suspected, by a Colgate
        Recreation staff member or Club Leaders, of sustaining a
        concussion or head injury while participating in a Colgate
        Recreation activity will be removed immediately from
        participation. This includes any club sport practice or game,
        intramural competition, physical education and/or outdoor
        education programming.</BlockText> 

        <BlockText>{'\n'}The individual who has been removed
        from participation may not return until a licensed health care
        provider has evaluated him/her. Written clearance on a
        doctor’s prescription pad/letterhead, from the health care
        provider, is required to be turned into the Director of
        Recreation before any activity can be resumed.
        </BlockText>

        <BlockText>
        The Colgate University Club Sports Program has a
        responsibility to educate its club sport student-athletes of
        the signs and symptoms of mild traumatic brain injuries;
        otherwise known as concussions. Club Sports Presidents and
        Coach (if applicable) go through training in order to be able
        to recognize concussive-type symptoms. However, many
        concussions can go unreported. It is imperative that those
        club sport student-athletes, who suspect they may be suffering
        from a concussion, seek treatment and report to a physician.{'\n'}
        </BlockText>

        <Header4>
        After completing the education module and watching
        the informational video I know:
        </Header4>

        <Bullet><BlockText>A concussion is a brain injury that can affect my ability to
        perform everyday activities, and affect reaction time,
        balance, sleep, and classroom performance.</BlockText></Bullet>

        <Bullet><BlockText>You cannot see a concussion, but you might notice some of the 
        symptoms right away. Other symptoms can show up hours or days after the injury.
        </BlockText></Bullet>

        <Bullet><BlockText>If I suspect a teammate has a concussion or any other injury,
        I am responsible for reporting the injury to my coach, club
        president/captain, on-duty student-first responder or
        certified athletics trainer, or Director of Recreation.</BlockText></Bullet>

        <Bullet><BlockText>I will not return to play in a game or practice if I have
        received a blow to the head or body that results in
        concussion-related symptoms (two or more).</BlockText></Bullet>

        <Bullet><BlockText>Following a concussion, the brain needs time to heal. You are
        much more likely to have a repeat concussion if you return to
        play before your symptoms resolve.</BlockText></Bullet>

        <Bullet><BlockText>In rare cases, concussions can cause permanent brain damage, 
        and even death.{'\n'}</BlockText></Bullet>


        <Header2>
        By signing this form, I agree to the following statements:
        </Header2>

        <Checkbox><BlockText><Bold>I have completed the concussion 
        education Module.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I have watched the concussion education video.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I have read and understand the Colgate University 
        Concussion Policy.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I understand that it is my responsibility 
        to report all injuries and illnesses to my captain/coach, a medical professional 
        and Director of Recreation.</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I understand that if I sustain a concussion, I cannot return to sport activity 
        until I have a obtained written clearance from a qualified medical provider (physician).</Bold></BlockText></Checkbox>
        <Checkbox><BlockText><Bold>I understand and give permission for Student Health Services designee to communicate with the 
        Director of Recreation and/or my club sport coach regarding my ability to participate in club sport activity.</Bold></BlockText></Checkbox>

        
        <Header3>Name</Header3>

        <View style={{flexDirection: 'row'}}>
            <Textbox 
                placeholder='First name' 
                style={{flex: 1}}
                autoCorrect={false}
                value = {this.state.firstName}
                handler={this.updateFirstName}
            />
            <Textbox 
                placeholder='Last name' 
                style={{flex: 1}}
                autoCorrect={false}
                value={this.state.lastName}
                handler={this.updateLastName}
            />
        </View>

        <Header3>Date</Header3>
        <Textbox 
            placeholder='Date (MM/DD/YYYY)' 
            style={{flex: 1}}
            autoCorrect={false}
            value={this.state.date}
            handler={this.updateDate}
        />

        <ColoredButton onPress={() => { 
                                        this.props.navigation.navigate('PSHome');
                                        this.props.markComplete();
                                      }}>
        Submit
        </ColoredButton>


      </ScrollView>
    );
  }
}

ConcussionPolicy = connect(
                        null, 
                        dispatch => ({markComplete: () => {dispatch({section: 'concussionPolicy', type: 'MARK_COMPLETE', state: true})}})
                        )(ConcussionPolicy);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    //alignItems: 'center',
    margin: 10,
    paddingBottom: 10,
  },
});
