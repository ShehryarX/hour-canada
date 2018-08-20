import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class LinksScreen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View styles={styles.container}>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 60, width: 60, alignSelf: 'center',}} />
        </View>

        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
