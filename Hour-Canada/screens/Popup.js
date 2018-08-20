import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

import TutorWantedCard from '../components/TutorWantedCard';

export default class Popup extends Component {
  state = {
    title: '',
    dateAndTime: '',
    description: '',
    tab: 'request'
  }

  render() {

    const styleButton1 = {
      backgroundColor: this.state.tab === 'request' ? '#F05C4B' : '#fff',
      borderRadius: 5,
      margin: 10,
      padding: 10,
      flex: 1,
    }

    const styleButton2 = {
      backgroundColor: this.state.tab === 'give' ? '#F05C4B' : '#fff',
      borderRadius: 5,
      margin: 10,
      padding: 10,
      flex: 1,
    }

    const text1 = {
      color: this.state.tab === 'request' ? '#fff' : '#F05C4B',
      fontFamily: 'raleway-bold', 
      fontSize: 24, 
      textAlign: 'center', 
    }

    const text2 = {
      color: this.state.tab === 'give' ? '#fff' : '#F05C4B',
      fontFamily: 'raleway-bold', 
      fontSize: 24, 
      textAlign: 'center'
    }


    return (
      <View styles={styles.containerStyle}>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 30, width: 30, alignSelf: 'center',}} />
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <TouchableOpacity style={styleButton1} onPress={() => this.setState({tab: 'request'})}>
            <Text style={text1}>REQUEST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styleButton2} onPress={() => this.setState({tab: 'give'})}>
            <Text style={text2}>GIVE</Text>
          </TouchableOpacity>
        </View>

        { this.state.tab === 'request' ? 
          <View>
            <Text style={{fontFamily: 'raleway-bold', fontSize: 32, textAlign: 'center', color: '#F05C4B'}}>Hours left: 5</Text>
            <View style={{margin: 20}}>
              <TextInput
                style={{height: 40, fontSize: 24}}
                onChangeText={(title) => this.setState({title})}
                placeholder=' TITLE'
                value={this.state.title}
                underlineColorAndroid={'red'}
              />
              <TextInput
                style={{height: 40, fontSize: 24}}
                onChangeText={(dateAndTime) => this.setState({dateAndTime})}
                placeholder=' DATE AND TIME'
                value={this.state.dateAndTime}
                underlineColorAndroid={'red'}
              />
              <TextInput
                style={{height: 40, fontSize: 24}}
                onChangeText={(description) => this.setState({description})}
                placeholder=' DESCRIPTION'
                value={this.state.description}
                multiline={true}
                numberOfLines={10}
                underlineColorAndroid={'red'}
                editable={true}
              />
            </View>

          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            <TouchableOpacity style={{flex: 1, borderRadius: 10, borderRadius: 5, padding: 10}} onPress={() => this.props.navigation.pop()}>
              <Text style={{fontFamily: 'raleway-bold', fontSize: 24, textAlign: 'center', color: '#F05C4B'}}>SUBMIT</Text>
            </TouchableOpacity> 
          </View>

          </View>

          : 

          <View>
            <TutorWantedCard title="Tutors Wanted" time="50 mins ago" description="Looking for a tutor beast at math and physics (like Shehryar) for my son's upcoming SAT test." poster="Shehryar Assad"/>

            <TutorWantedCard title="Blue Jays Game" time="10 mins ago" description="Need a few volunteers to help with the baseball game." poster="John Smith"/>

            <TutorWantedCard title="Hack the Barriers" time="5 hours ago" description="Need help with setup and clean up for the event." poster="John Smith"/>
          </View>
        }

        
      </View>
    ) 
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column'
  },
  buttonStyle1: {
    backgroundColor: '#F05C4B',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flex: 1,
  },
  buttonStyle2: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flex: 1,
  }
}