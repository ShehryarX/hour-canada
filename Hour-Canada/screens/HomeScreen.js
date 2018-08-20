import React from 'react';
import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';

import IdeasCard from '../components/IdeasCard';
import TutorWantedCard from '../components/TutorWantedCard';
import TopContributer from '../components/TopContributer';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <ScrollView>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 30, width: 30, alignSelf: 'center',}} />
        </View>
        <View style={styles.containers  }>
          <ScrollView>
            <ScrollView horizontal={true} vertical={false} showsHorizontalScrollIndicator={false} style={styles.ideasViewStyle}>
              <IdeasCard navigation={this.props.navigation} title='General' image={require('../assets/images/categories/general.png')} />
              <IdeasCard navigation={this.props.navigation} title='Education' image={require('../assets/images/categories/education.png')} />
              <IdeasCard navigation={this.props.navigation} title='Events' image={require('../assets/images/categories/events.png')} />
              <IdeasCard navigation={this.props.navigation} title='Home' image={require('../assets/images/categories/home.png')} />
              <IdeasCard navigation={this.props.navigation} title='Sports' image={require('../assets/images/categories/sports.png')} />
            </ScrollView>   
          </ScrollView>

          <TutorWantedCard title="Tutors Wanted" time="50 mins ago" description="Looking for a tutor beast at math and physics (like Shehryar) for my son's upcoming SAT test." poster="Shehryar Assad"/>

          <View style={{paddingTop: 20}}>
            <TopContributer />
          </View>

          <TutorWantedCard title="Blue Jays Game" time="10 mins ago" description="Need a few volunteers to help with the baseball game." poster="John Smith"/>

          <TutorWantedCard title="Hack the Barriers" time="5 hours ago" description="Need help with setup and clean up for the event." poster="John Smith"/>


        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    paddingTop: 0,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
  ideasViewStyle: {
    backgroundColor: 'white',
    marginVertical: 10,
  }
}
