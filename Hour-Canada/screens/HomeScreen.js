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

        <TopContributer />
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  ideasViewStyle: {
    backgroundColor: '#fff',
    marginVertical: 20,
  }
}
