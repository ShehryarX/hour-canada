import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image  } from 'react-native';
import { ExpoLinksView } from '@expo/samples';



export default class LinksScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View styles={styles.container}>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 30, width: 30, alignSelf: 'center',}} />
        </View>

        <View style={{paddingTop: 15}}>
          <Text style={{fontFamily: 'raleway-bold', fontSize: 48, textAlign: 'center'}}>Leaderboard</Text>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: '#F05C4B', marginVertical: 5, marginHorizontal: 20, borderRadius: 8, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 40, marginTop: 10, paddingLeft: 25, paddingRight: 20, color: '#fff',}}>1</Text>
          <Image source={require('../assets/images/shehryar_headshot.jpg')} style={{marginTop: 6, width: 50, height: 50, borderRadius: 25,}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'raleway-semi-bold', paddingLeft: 10, fontSize: 28, marginTop: 6, color: '#fff',}}>Shehryar Assad</Text>
            <Text style={{fontFamily: 'raleway-regular', fontSize: 24, color: '#fff', paddingLeft: 10, marginTop: -5, paddingBottom: 10}}>941 hours</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: '#F05C4B', marginVertical: 5, marginHorizontal: 20, borderRadius: 8, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 40, marginTop: 10, paddingLeft: 25, paddingRight: 20, color: '#fff',}}>2</Text>
          <Image source={require('../assets/images/mufeez_headshot.jpg')} style={{marginTop: 6, width: 50, height: 50, borderRadius: 25,}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'raleway-semi-bold', paddingLeft: 10, fontSize: 28, marginTop: 6, color: '#fff',}}>Mufeez Amjad</Text>
            <Text style={{fontFamily: 'raleway-regular', fontSize: 24, color: '#fff', paddingLeft: 10, marginTop: -5, paddingBottom: 10}}>820 hours</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
