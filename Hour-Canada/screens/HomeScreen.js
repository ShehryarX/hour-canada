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
      <View>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 60, width: 60, alignSelf: 'center',}} />
        </View>
        <View style={styles.container}>
          <ScrollView>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.ideasViewStyle}>
              <IdeasCard image={require('../assets/images/categories/general.png')} />
              <IdeasCard image={require('../assets/images/categories/education.png')} />
              <IdeasCard image={require('../assets/images/categories/events.png')} />
              <IdeasCard image={require('../assets/images/categories/home.png')} />
              <IdeasCard image={require('../assets/images/categories/sports.png')} />
            </ScrollView>
          </ScrollView>

          <TutorWantedCard />

          <View style={{paddingTop: 20}}>
            <TopContributer />
          </View>
        </View>
      </View>
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
