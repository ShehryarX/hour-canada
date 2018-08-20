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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <IdeasCard />
            <IdeasCard />
            <IdeasCard />
            <IdeasCard />
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 10,
    backgroundColor: '#fff'
  },
}
