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

        <View style={{paddingTop: 15}}>
          <Text style={{fontFamily: 'raleway-bold', fontSize: 48, textAlign: 'center'}}>Leaderboard</Text>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: '#F05C4B', margin: 20, borderRadius: 8, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 52, marginTop: 35, paddingLeft: 25, paddingRight: 20, color: '#fff',}}>1</Text>
          <Image source={require('../assets/images/shehryar_headshot.jpg')} style={{margin: 10, width: 100, height: 100, borderRadius: 100,}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'raleway-semi-bold', paddingLeft: 20, fontSize: 32, marginTop: 30, color: '#fff',}}>Shehryar Assad</Text>
            <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 24, color: '#fff', paddingLeft: 20}}>1023 hours</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', backgroundColor: '#F05C4B', marginHorizontal: 20, borderRadius: 8, flexDirection: 'row'}}>
          <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 52, marginTop: 15, paddingLeft: 25, paddingRight: 20, color: '#fff',}}>2</Text>
          <Image source={require('../assets/images/mufeez_headshot.jpg')} style={{margin: 10, width: 100, height: 100, borderRadius: 100,}}/>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontFamily: 'raleway-semi-bold', paddingLeft: 20, fontSize: 32, marginTop: 30, color: '#fff',}}>Mufeez Amjad</Text>
            <Text style={{fontFamily: 'raleway-semi-bold', fontSize: 24, color: '#fff', paddingLeft: 20}}>820 hours</Text>
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
